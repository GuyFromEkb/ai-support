"use client"
import { api } from "@workspace/backend/_generated/api"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

import { FormEvent } from "react"

import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react"

export default function Page() {
  const users = useQuery(api.users.getUsers)
  const addUser = useMutation(api.users.addUser)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputValue = new FormData(e.currentTarget).get("userName")
    if (inputValue) {
      const res = await addUser({ name: inputValue.toString() })
    }
  }

  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello apps/web</h1>

            <pre className="text-purple-400">{JSON.stringify(users, null, 2)}</pre>

            <form onSubmit={handleSubmit}>
              <Input name="userName" />
              <Button type="submit" size="sm">
                Button
              </Button>
            </form>
          </div>
        </div>
      </Authenticated>
    </>
  )
}
