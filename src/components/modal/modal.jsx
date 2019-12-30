// @flow

import { useEffect, useMemo } from 'react'
import type { Node } from 'react'
import ReactDOM from 'react-dom'

type Props = { children: Node }

function Modal({ children }: Props) {
  const node = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    if (document.body) {
      document.body.appendChild(node)
    }

    return () => {
      if (document.body) {
        document.body.removeChild(node)
      }
    }
  }, [node])

  return ReactDOM.createPortal(children, node)
}

export default Modal
