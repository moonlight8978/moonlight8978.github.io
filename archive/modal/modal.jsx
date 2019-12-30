// @flow

import React, { useState, useCallback } from 'react'
import type { Node } from 'react'

import Portal from './portal'

type Props = {
  children: ({
    isOpen: boolean,
    closeModal: () => void,
    openModal: () => void,
    createModal: (node: Node) => Node,
  }) => Node,
}

function Modal({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const createModal = useCallback(
    (node: Node) => (isOpen ? <Portal>{node}</Portal> : null),
    [isOpen]
  )

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return children({
    isOpen,
    closeModal,
    openModal,
    createModal,
  })
}

export default Modal
