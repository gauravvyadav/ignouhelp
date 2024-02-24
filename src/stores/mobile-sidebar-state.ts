import { create } from "zustand"

type MobileSidebarState = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useMobileSidebarState = create<MobileSidebarState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))
