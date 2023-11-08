"use client"

import { FC } from 'react'
import { useModalAuth } from '@/hooks/useModalAuth'
import { Modal } from '@/ui/Modal'

interface SignInProps {
  
}

const SignIn: FC<SignInProps> = ({}) => {
  const authModal = useModalAuth()

  return (
    <Modal
    title='Sign In'
    description='By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.'
    isOpen={authModal.isOpen}
    onClose={authModal.onClose}
    >
      <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <div className="flex flex-col space-y-2 text-center">
              <p className=''></p>
          </div>
      </div>
    </Modal>
  )
}

export default SignIn