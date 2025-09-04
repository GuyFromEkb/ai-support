"use client"
import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Input } from "@workspace/ui/components/input"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default function Page() {
  const [sum, setSum] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello apps/web</h1>
        <div
          className={cn("font-mono", {
            ["text-primary"]: sum > 40,
            ["text-secondary"]: sum < 80,
            ["text-ring"]: sum > 100,
          })}
        >
          {sum}
        </div>
        <Input />
        <Button onClick={() => setSum(add(getRandomInt(60), getRandomInt(120)))} size="sm">
          Button
        </Button>
      </div>
    </div>
  )
}
