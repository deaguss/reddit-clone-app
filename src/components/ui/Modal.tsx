import { FC } from 'react'
import { 
     Dialog,
     DialogContent,
     DialogDescription, 
     DialogHeader, 
     DialogTitle 
    } from '@/ui/Dialog'
import { cn } from '@/lib/utils'


interface ModalProps {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode
}

export const Modal: FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
  const onChange = (open: boolean) => {
    if(!open) onClose()
  }

  return(
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent className="p-16">
            <DialogHeader>
                <DialogTitle className='py-2 text-2xl'>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            <div className="py-2">
                {children}
            </div>
        </DialogContent>
    </Dialog>
  )
}