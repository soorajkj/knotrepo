import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import { auth, Session } from "~lib/auth";

export const getServerSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};

export const getMiddlewareSession = async (request: NextRequest) => {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: { cookie: request.headers.get("cookie") || "" },
    }
  );
  return session;
};
