import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/about", "/products", "/home"];

export const middleware = (req: NextRequest, res: NextResponse) => {
  const path = req.nextUrl.pathname;
  if (!protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.next();
  }
  const cookie = req.cookies.get("auth-token");
  const token = cookie?.value;
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
};

export const config = {
  matcher: ["/about/:path*", "/home/:path*", "/products/:path*"],
};
