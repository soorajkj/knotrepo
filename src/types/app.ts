import { Session, User } from "better-auth";
import { Env } from "hono";
import { auth } from "~lib/auth";
import { prisma } from "~lib/prisma";

export interface AppBindings extends Env {
  Bindings: {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    BETTER_AUTH_URL: string;
    BETTER_AUTH_SECRET: string;
  };
  Variables: {
    db: typeof prisma;
    auth: typeof auth;
    session: Session | null;
    user: User | null;
  };
}
