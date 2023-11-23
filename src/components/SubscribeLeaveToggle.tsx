"use client"

import { FC, startTransition } from 'react'
import { Button } from './ui/Button'
import { useMutation } from '@tanstack/react-query'
import { SubscribeToSubredditPayload } from '@/lib/validators/subreddit'
import axios, { AxiosError } from 'axios'
import { useToast } from '@/hooks/useToast'
import { useCustomToasts } from '@/hooks/use-costum-toast'
import { useRouter } from 'next/navigation'

interface SubscribeLeaveToggleProps {
    isSubscribed: boolean
    subredditId: string
    subredditName: string
}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
    isSubscribed,
    subredditId,
    subredditName
}) => {

    const { toast } = useToast()
    const { loginToast } = useCustomToasts()
    const router = useRouter()

    const { mutate: subscribe, isLoading: isSubLoading } = useMutation({
        mutationFn: async() => {
            const payload: SubscribeToSubredditPayload = {
                subredditId
            }

            const { data } = await axios.post(`/api/subreddit/subscribe`, payload)
            return data as string
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
              if (err.response?.status === 401) {
                return loginToast()
              }
            }
      
            return toast({
              title: 'There was a problem.',
              description: 'Something went wrong. Please try again.',
              variant: 'destructive',
            })
          },
          onSuccess: () => {
            startTransition(() => {
              // Refresh the current route and fetch new data from the server without
              // losing client-side browser or React state.
              router.refresh()
            })
            toast({
              title: 'Subscribed!',
              description: `You are now subscribed to r/${subredditName}`,
            })
          },
        })

        const { mutate: unsubscribe, isLoading: isUnSubLoading } = useMutation({
            mutationFn: async() => {
                const payload: SubscribeToSubredditPayload = {
                    subredditId
                }
    
                const { data } = await axios.post(`/api/subreddit/unsubscribe`, payload)
                return data as string
            },
            onError: (err: AxiosError) => {
              toast({
                title: 'Error',
                description: err.response?.data as string,
                variant: 'destructive',
              })
            },
            onSuccess: () => {
              startTransition(() => {
                // Refresh the current route and fetch new data from the server without
                // losing client-side browser or React state.
                router.refresh()
              })
              toast({
                title: 'Unsubscribed',
                description: `You are now unsubscribed from r/${subredditName} :(`,
              })
            },
            })

  return isSubscribed ? (
    <Button 
    className='w-full mt-1 mb-4'
    isLoading={isUnSubLoading}
    onClick={() => unsubscribe()}
    >
        Leave community
    </Button>
  ) : (
    <Button 
    className='w-full mt-1 mb-4'
    isLoading={isSubLoading}
    onClick={() => subscribe()}
    >
        Join to post
    </Button>
  )
}

export default SubscribeLeaveToggle