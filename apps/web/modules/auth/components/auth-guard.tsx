"use client"

import { AuthLayout } from "../layouts/auth-layout"
import { SignInView } from "../views/sign-in-view"
import { useConvexAuth } from "convex/react"
import { FC, ReactNode } from "react"

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) return <AuthLayout>Loading...</AuthLayout>

  if (!isAuthenticated)
    return (
      <AuthLayout>
        <SignInView />
      </AuthLayout>
    )

  return children
}
