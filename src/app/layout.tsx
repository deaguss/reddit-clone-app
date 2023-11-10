import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import { getAuthSession } from '@/lib/auth'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/providers/ModalProvider'
import { ProviderSession } from '@/providers/SessionProvider'
import '@/styles/globals.css'

import { Inter } from "next/font/google"


export const metadata = {
  title: 'Reddit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({
  subsets: ['latin']
})


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAuthSession()

  return (
    <html lang='en' className={cn("bg-white text-slate-900 antialiased light", inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 '>
        <ProviderSession session={session}>
        {/* @ts-expect-error Server Component */}
          <Navbar />
          <ModalProvider />
          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
          <Toaster />
        </ProviderSession>
        </body>
    </html>
  )
}
