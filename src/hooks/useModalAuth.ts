import { create } from "zustand"


interface useModalAuth {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useModalAuth = create<useModalAuth>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))