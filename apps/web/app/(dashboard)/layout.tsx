import { AuthGuard } from "@/modules/auth/components/auth-guard"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>
}
