"use server";

import { signOut } from "@/auth";

export const signoutAction = async () => {
  try {
    await signOut({ redirect: false });
  } catch (err) {}
};
