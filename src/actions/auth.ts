"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";
import { AuthResponse } from "@/types/auth";
import { LoginSchema } from "@/schemas/login";
import { RegisterSchema } from "@/schemas/register";
import { signIn } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const register = async (
  values: z.infer<typeof RegisterSchema>
): Promise<AuthResponse> => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success)
    return { success: false, message: "Invaild credentials" };
  const { email, password, username } = validatedFields.data;
  const emailExisting = await prisma.user.findUnique({ where: { email } });
  if (emailExisting)
    return {
      success: false,
      message: `User with this email ${email} is already exist`,
    };
  const usernameExisting = await prisma.user.findUnique({
    where: { username },
  });
  if (usernameExisting)
    return { success: false, message: "Username is not available" };
  const hash = await bcrypt.hash(password, 12);
  await prisma.user.create({ data: { email, password: hash, username } });
  return {
    success: true,
    message: "User created successfully",
  };
};

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<AuthResponse> => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success)
    return { success: false, message: "Invaild credentials" };
  const { username, password } = validatedFields.data;
  try {
    await signIn("credentials", { username, password, redirect: true });
    return { success: true, message: "User logged in successfully" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid credentials" };
        default:
          return { success: false, message: "Something went wrong" };
      }
    }
    throw error;
  }
};
