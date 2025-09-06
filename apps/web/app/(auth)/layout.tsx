import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen min-w-screen h-full flex justify-center items-center">
      {children}
    </section>
  )
}
