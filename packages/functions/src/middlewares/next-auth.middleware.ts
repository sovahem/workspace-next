import NextAuth from "next-auth";
import { authConfig } from "../configs/auth.config";

export default NextAuth(authConfig).auth as any;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
