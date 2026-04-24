import NextAuth, { type NextAuthConfig } from "next-auth"
import { z } from "zod"
import Credentials from "next-auth/providers/credentials"

// Nous créons une auth config séparée pour le middleware (Edge runtime)
export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize() { return null } // Fake authorize for edge compatibility
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      
      if (isOnAdmin) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/admin/dashboard', nextUrl))
      }
      return true
    },
  },
  secret: process.env.AUTH_SECRET || "fallback_secret_for_build_only",
  trustHost: true
}

export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
}
