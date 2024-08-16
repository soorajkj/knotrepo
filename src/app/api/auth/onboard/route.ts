import { NextResponse } from "next/server";
import { OnboardSchema } from "@/schemas/onboard";
import { prisma } from "@/lib/prisma";
import { logger } from "@/utils/logger";

export const POST = async (req: Request) => {
  try {
    const formData = await req.json();
    const validatedFields = OnboardSchema.safeParse(formData);

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: validatedFields.error.errors[0].message },
        { status: 400 }
      );
    }

    const { username } = validatedFields.data;
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return NextResponse.json(
        { message: `Username ${username} is available`, success: true },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: `Username ${username} is already taken`, success: false },
      { status: 200 }
    );
  } catch (error) {
    logger.error(error);
    return NextResponse.json(error, { status: 500 });
  }
};
