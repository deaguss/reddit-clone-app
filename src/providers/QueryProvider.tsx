'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode,
  session: Session | null
}

const queryClient = new QueryClient()

const QueryProviders: FC<LayoutProps> = ({ children, session }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  )
}

export default QueryProviders