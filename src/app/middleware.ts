import { type NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

// Paths that require authentication
const protectedPaths = [
  "/account",
  "/account/address",
  "/account/wishlist",
  "/orders",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  // Get the token from the cookies
  const token = request.cookies.get("auth-token")?.value;

  // If the path is protected and there's no token, redirect to home with auth modal
  if (isProtectedPath && !token) {
    const url = new URL("/", request.url);
    url.searchParams.set("auth", "true");
    url.searchParams.set("type", "login");
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  // For protected paths, verify the token
  if (isProtectedPath && token) {
    try {
      // Verify the token
      verify(token, process.env.NEXTAUTH_SECRET || "your-secret-key");

      // If verification is successful, continue
      return NextResponse.next();
    } catch (error) {
      // If verification fails, redirect to home with auth modal
      const url = new URL("/", request.url);
      url.searchParams.set("auth", "true");
      url.searchParams.set("type", "login");
      url.searchParams.set("callbackUrl", encodeURI(pathname));
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all protected paths
    ...protectedPaths.map((path) => `${path}/:path*`),
  ],
};
