"use server";

import bycrypt from "bcryptjs";
import { SignupSchema } from "@/schemas/signup";
import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/utils/quries/user.quries";
import { generateUsername } from "@/utils/username";
import { SignupFormFields } from "@/components/auth/signup-form";

export const signupAction = async (data: SignupFormFields) => {
  try {
    const validatedData = SignupSchema.safeParse(data);
    if (!validatedData.success) return { error: "Invalid inputs" };
    const { email, password } = validatedData.data;
    const hashed = await bycrypt.hash(password, 12);
    const user = await getUserByEmail(email);
    if (user) return { error: "The email has already been taken." };
    const username = generateUsername(email);
    await prisma.user.create({
      data: { email: email.toLowerCase(), password: hashed, username },
    });
    return { success: "User created succesfully" };
  } catch (error) {
    return { error: "An error occured" };
  }
};
