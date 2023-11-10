'use client'

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";



interface ProviderSessionProps {
    session: Session | null;
    children: ReactNode; 
  }

export const ProviderSession: React.FC<ProviderSessionProps> = ({ 
    session, children
 }) => {
  return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
  )
}