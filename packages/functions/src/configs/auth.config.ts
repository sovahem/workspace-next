import type { NextAuthConfig } from "next-auth";

const siteName = "store";

export const authConfig: NextAuthConfig = {
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const modifiedSession = {
        ...session,
        user: token as any,
      };

      return modifiedSession;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (!isLoggedIn) return false;
      if (!nextUrl.pathname.startsWith(`/${siteName}`))
        return Response.redirect(new URL("/x-store/dashboard", nextUrl));
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
