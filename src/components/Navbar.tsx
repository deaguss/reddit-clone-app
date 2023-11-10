import Link from "next/link"

import { Icons } from "@/components/Icons"
import { getAuthSession } from "@/lib/auth"
import SignInButton from "@/components/SignInButton"

const Navbar = async() => {
  const session = await getAuthSession()
  
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
        <div className="container max-w-7xl mx-auto flex items-center justify-between gap-2">

            {/* logo */}
            <Link href="/" className="flex gap-2 ut-items-center">
                <Icons.logoMobile />
                <Icons.logoDesktop />
            </Link>

            {/* search bar */}
            
            {session ? (
              <p>u are logged {session.user.name}</p>
            ): (
              <SignInButton />
            )}

        </div>
    </div>
  )
}

export default Navbar