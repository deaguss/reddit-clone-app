import { buttonVariants } from '@/components/ui/Button'
import { toast } from '@/hooks/useToast'
import Link from 'next/link'
import { useModalAuth } from './useModalAuth'

export const useCustomToasts = () => {
  const onOpen = useModalAuth((state) => state.onOpen)

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
          href='/r/create'
          className={buttonVariants({ variant: 'outline' })}>
          Login
        </Link>
      ),
    })
  }

  return { loginToast }
}