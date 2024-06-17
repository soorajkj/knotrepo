import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

const _auth = ["/login", "/register"];
const _public = ["/"];

// @ts-expect-error
export default auth(async function middleware(req: any) {
  const { nextUrl } = req;
  const authenticated = !!req.auth;

  if (nextUrl.pathname.startsWith("/api/auth")) return null;

  if (_auth.includes(nextUrl.pathname)) {
    if (authenticated) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }

  if (!authenticated && !_public.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
