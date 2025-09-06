"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ClerkProvider, useAuth } from "@clerk/nextjs"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <ConvexProviderWithClerk useAuth={useAuth} client={convexClient}>
          {children}
        </ConvexProviderWithClerk>
      </NextThemesProvider>
    </ClerkProvider>
  )
}

var convexClient = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
var clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!
