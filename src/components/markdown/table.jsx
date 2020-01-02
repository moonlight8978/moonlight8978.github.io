// @flow

import React from 'react'
import type { Node } from 'react'
import classnames from 'classnames'

import styles from './table.module.scss'

type Props = { children: Node }

function Table({ children }: Props) {
  return <table className={styles.table}>{children}</table>
}

function TableRow({ children }: Props) {
  return <tr className={styles.row}>{children}</tr>
}

type CellAlign = 'center' | 'left' | 'right'

type CellProps = Props & { isHeader: boolean, align: ?CellAlign }

function TableCell({ children, isHeader, align }: CellProps) {
  const position = align || 'left'

  if (isHeader) {
    return (
      <th className={classnames(styles.cell, styles.header)} align={position}>
        {children}
      </th>
    )
  }

  return (
    <td className={styles.cell} align={position}>
      {children}
    </td>
  )
}

export default Table

export { TableRow, TableCell }
