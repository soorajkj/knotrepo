import { NextRequest, NextResponse } from "next/server";
import { getMiddlewareSession } from "~utils/get-session";

export const PUBLIC_ROUTES = ["/", "/about"];
export const AUTH_ROUTES = ["/auth/signin", "/auth/signup"];
export const ONBOARD_ROUTE = "/auth/signup/onboard";
export const DEFAULT_REDIRECT_ROUTE = "/dashboard";
export const DEFAULT_AUTH_REDIRECT_ROUTE = "/auth/signin";

export async function middleware(request: NextRequest) {
  const _session = await getMiddlewareSession(request);
  const nextURL = request.nextUrl;
  const _pathname = nextURL.pathname;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|.*\\..*|_next).*)"],
};
