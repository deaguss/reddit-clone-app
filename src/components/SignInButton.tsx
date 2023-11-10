"use client"

import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import { useModalAuth } from "@/hooks/useModalAuth"

const SignInButton = () => {
    const onOpen = useModalAuth((state) => state.onOpen)
  return (
    <>
        <Button onClick={onOpen} className={cn(buttonVariants(), "rounded-full bg-accent hover:bg-accent-foreground")}>Log In</Button> 
    </>
  )
}

export default SignInButton