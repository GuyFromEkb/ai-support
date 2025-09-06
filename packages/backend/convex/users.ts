import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getUsers = query({
  args: {},
  handler: async (ctx, args) => {
    const users = await ctx.db.query("users").collect()

    return users
  },
})

export const addUser = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const res = await ctx.db.insert("users", { name: args.name })

    return res.toString()
  },
})
