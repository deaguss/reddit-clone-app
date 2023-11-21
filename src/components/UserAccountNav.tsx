"use client"

import { FC } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/ui/DropdownMenu'
import { User } from 'next-auth'
import UserAvatar from '@/components/UserAvatar'
import { Button } from '@/ui/Button'
import StatusIndicator from './StatusIndicator'
import { Icons } from './Icons'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({
    user
}) => {
    const isUserPresent: boolean = !!user;
  return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='flex justify-between gap-2 px-2'>
                    <UserAvatar 
                    className='h-8 w-8'
                    user={{ 
                        name: user.name || null,
                        image: user.image ||  null
                    }} />
                    <div className="text-xs flex flex-col items-center">
                        <div>
                            <p>{user.name}</p>
                        </div>
                        <StatusIndicator user={user} isUserPresent={isUserPresent} />
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
            className='bg-white' align='end'
            >
            <div className='py-2 max-w-[15rem] w-[15rem]'>
                <div className="font-semibold text-[#808080] px-4 py-2 flex gap-8">
                    <Icons.user color='#808080'/> My Stuff
                </div>
                <DropdownMenuItem className='py-2.5' asChild>
                    <Link href="#" className='font-medium text-lg ps-[4.5rem]'>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='py-2.5' asChild>
                    <Link href="#" className='font-medium text-lg ps-[4.5rem]'>User Setting</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className='h-[1.2px]'/>
                <div className="font-semibold text-[#808080] px-4 py-1.5 flex gap-8">
                    <Icons.view color='#808080'/> View Options
                </div>
                <DropdownMenuItem className='py-2.5' asChild>
                    <Link href="#" className='font-medium text-lg ps-[4.5rem]'>Dark Mode</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className='h-[1.2px]'/>
                <DropdownMenuItem className='py-2.5' asChild>
                    <Link href="/r/create" className='font-medium text-lg flex gap-8 ps-4'><Icons.message />Create a Community</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className='h-[1.2px]'/>
                <DropdownMenuItem 
                onSelect={(e) => {
                    e.preventDefault()
                    signOut({
                        callbackUrl: `${window.location.origin}/`
                    })
                }}
                className='py-2.5 font-medium text-base flex gap-8 ps-4'>
                    <Icons.logOut />Log Out
                </DropdownMenuItem>
            </div>
            </DropdownMenuContent>
        </DropdownMenu>
        )
}

export default UserAccountNav