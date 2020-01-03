import React from 'react'
import { render } from '@testing-library/react'

import Table, { TableRow, TableCell } from '../table'

const renderTable = children =>
  render(
    <table>
      <tbody>{children}</tbody>
    </table>
  )

describe('Table', () => {
  test('renders correctly', () => {
    const children = (
      <tbody>
        <tr>
          <td>Row</td>
        </tr>
      </tbody>
    )
    const { container } = render(<Table>{children}</Table>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('TableRow', () => {
  test('renders correctly', () => {
    const children = <td>Row</td>
    const { container } = renderTable(<TableRow>{children}</TableRow>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('TableHeader', () => {
  test('renders left-aligned header correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell isHeader>{children}</TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders center-aligned header correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell isHeader align="center">
          {children}
        </TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders right-aligned header correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell isHeader align="right">
          {children}
        </TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('TableCell', () => {
  test('renders left-aligned cell correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell>{children}</TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders center-aligned cell correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell align="center">{children}</TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders right-aligned cell correctly', () => {
    const children = <>Row</>
    const { container } = renderTable(
      <tr>
        <TableCell align="right">{children}</TableCell>
      </tr>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
