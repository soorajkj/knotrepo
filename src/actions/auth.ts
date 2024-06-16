"use server";

import bcrypt from "bcryptjs";
import { z } from "zod";
import { LoginSchema } from "@/schemas/login";
import { RegisterSchema } from "@/schemas/register";
import { signIn } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return;
  const { email, password, username } = validatedFields.data;
  const hash = await bcrypt.hash(password, 12);
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { error: "User already existing" };
  await prisma.user.create({ data: { email, password: hash, username } });
  return { success: "User created successfully" };
};

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return;
  const { username, password } = validatedFields.data;
  try {
    await signIn("credentials", { username, password, redirect: false });
    return { success: "User logged in successfully" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
