"use client"

import { buttonVariants } from "@/components/ui/Button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react"
import { useModalAuth } from "@/hooks/useModalAuth"
import { useSession } from "next-auth/react"

export default function Home() {
  const onOpen = useModalAuth((state) => state.onOpen)
    const isOpen = useModalAuth((state) => state.isOpen)
    const { data: session } = useSession()

    useEffect(() => {
      if(!isOpen && !session?.user) onOpen()
    }, [onOpen, session])

  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl">Your Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
        {/* feed */}

        {/* subreddit info */}
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first">
          <div className="bg-emerald-100 px-6 py-4">
              <p className="font-semibold py-3 flex items-center gap-1.5">
                <HomeIcon />
                Home
              </p>
          </div>

          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className='text-zinc-500'>
                Your personal Breadit frontpage. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
              href={`/r/create`}>
              Create Community
            </Link>
          </dl>
        </div>
      </div>
    </>
  )
}
