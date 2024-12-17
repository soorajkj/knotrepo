import { NextResponse } from "next/server";
import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const _apis = "/api/auth";
const _public = ["/"];
const _auth = ["/auth/signin", "/auth/signup", "/auth/register/onboard"];

export default auth(async function middlware(req) {
  const _authenticated = !!req.auth;
  const { nextUrl } = req;

  if (nextUrl.pathname.startsWith(_apis)) return;

  if (_auth.includes(nextUrl.pathname)) {
    if (_authenticated) {
      return Response.redirect(new URL("/dashboard/analytics", nextUrl));
    }
    return;
  }

  if (!_authenticated && !_public.includes(nextUrl.pathname)) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
