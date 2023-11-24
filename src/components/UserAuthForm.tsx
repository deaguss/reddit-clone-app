"use client"

import { FC, useState } from 'react'
import { signIn } from "next-auth/react"

import { cn } from '@/lib/utils'
import { Button } from '@/ui/Button'
import { Icons } from '@/components/Icons'
import { useToast } from '@/hooks/useToast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

const UserAuthForm: FC<UserAuthFormProps> = ({
    className, ...props
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { toast } = useToast()

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true);
            await signIn('google');
        } catch (error) {
            console.error("Error logging in with Google:", error);
            toast({
                title: "There was a problem.",
                description: "There was an error logging in with Google",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };
    

  return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button 
            onClick={loginWithGoogle}
            size="lg" 
            className='w-full rounded-xl'>
                {isLoading ? null : <Icons.google className='h-4 w-4 mr-2'/>}
                Continue with Google</Button>
        </div>
        )
}

export default UserAuthForm