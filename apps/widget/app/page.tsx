"use client"
import { api } from "@workspace/backend/_generated/api"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { useQuery, useMutation } from "convex/react"
import { FormEvent } from "react"

export default function Page() {
  const users = useQuery(api.users.getUsers)
  const addUser = useMutation(api.users.addUser)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //@ts-ignore
    const inputValue = e.target.input.value

    const res = await addUser({ name: inputValue })
  }

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello apps/widget</h1>

        <pre className="text-purple-400">{JSON.stringify(users, null, 2)}</pre>

        <form onSubmit={handleSubmit}>
          <Input name="input" />
          <Button size="sm">Button</Button>
        </form>
      </div>
    </div>
  )
}
