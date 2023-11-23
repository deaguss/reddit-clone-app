import { buttonVariants } from '@/components/ui/Button'
import { toast } from '@/hooks/useToast'
import Link from 'next/link'
import { useModalAuth } from './useModalAuth'
import { usePathname } from 'next/navigation'

export const useCustomToasts = () => {
  const onOpen = useModalAuth((state) => state.onOpen)
  const pathname = usePathname()

  const loginToast = () => {
    const { dismiss } = toast({
      title: 'Login required.',
      description: 'You need to be logged in to do that.',
      variant: 'destructive',
      action: (
        <Link
          onClick={() => {
            dismiss()
            onOpen()
            }
          }
          href={pathname}
          className={buttonVariants({ variant: 'outline' })}>
          Login
        </Link>
      ),
    })
  }

  return { loginToast }
}