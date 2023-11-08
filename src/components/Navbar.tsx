"use client"

import Link from "next/link"
import { Icons } from "./Icons"
import { Button, buttonVariants } from "@/ui/Button"
import { cn } from "@/lib/utils"
import { useModalAuth } from "@/hooks/useModalAuth"

const Navbar = async() => {
  const onOpen = useModalAuth((state) => state.onOpen)

  
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
        <div className="container max-w-7xl mx-auto flex items-center justify-between gap-2">

            {/* logo */}
            <Link href="/" className="flex gap-2 ut-items-center">
                <Icons.logoMobile />
                <Icons.logoDesktop />
            </Link>

            {/* search bar */}

            <Button onClick={onOpen} className={cn(buttonVariants(), "rounded-full bg-accent hover:bg-accent-foreground")}>Log In</Button>
        </div>
    </div>
  )
}

export default Navbar