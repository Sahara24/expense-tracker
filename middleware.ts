import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLoggedIn = cookies().get("user_logged_in");
  console.log(isLoggedIn, "middleWare");
  if (isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/login", "/"],
};
