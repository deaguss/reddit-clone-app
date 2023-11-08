"use client"

import { useEffect } from "react"
import { useModalAuth } from "@/hooks/useModalAuth"

const SetupPage = () => {
    const onOpen = useModalAuth((state) => state.onOpen)
    const isOpen = useModalAuth((state) => state.isOpen)

    useEffect(() => {
      if(!isOpen) onOpen()
    }, [onOpen])

    return null
  }
  
export default SetupPage
