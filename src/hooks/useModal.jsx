import { useState } from "react"

export const useModal = (initIsOpen = false) => {

    const [isOpen, setIsOpen] = useState(initIsOpen)

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    return {
        isOpen,
        openModal,
        closeModal,
    }
}