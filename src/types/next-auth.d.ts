import type { DefaultSession, DefaultUser } from "next-auth"
import type { JWT as DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string | null
  }

  interface Session {
    user: {
      id: string
      role?: string | null
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role?: string | null
  }
}
