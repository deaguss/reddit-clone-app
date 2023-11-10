"use client"

import { useEffect } from "react"
import { useModalAuth } from "@/hooks/useModalAuth"
import { useSession } from "next-auth/react"

const SetupPage = () => {
    const onOpen = useModalAuth((state) => state.onOpen)
    const isOpen = useModalAuth((state) => state.isOpen)
    const { data: session } = useSession()

    useEffect(() => {
      if(!isOpen && !session) onOpen()
    }, [onOpen, session])

    return null
  }
  
export default SetupPage
