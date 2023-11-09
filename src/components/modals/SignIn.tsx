"use client"

import { FC } from 'react'
import { useModalAuth } from '@/hooks/useModalAuth'
import { Modal } from '@/ui/Modal'
import UserAuthForm from '../UserAuthForm'

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
      <UserAuthForm />
    </Modal>
  )
}

export default SignIn