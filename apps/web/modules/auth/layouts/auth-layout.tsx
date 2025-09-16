import { FC, ReactNode } from "react"

export const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="min-h-screen min-w-screen h-full flex justify-center items-center">
      {children}
    </section>
  )
}
