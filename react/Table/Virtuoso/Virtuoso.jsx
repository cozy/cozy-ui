import React, { useState } from 'react'
import { TableVirtuoso } from 'react-virtuoso'

import FixedHeaderContent from './FixedHeaderContent'
import RowContent from './RowContent'
import VirtuosoComponents from './VirtuosoComponents'
import { stableSort, getComparator } from './helpers'

const VirtualizedTable = ({ rows, columns, defaultOrder, componentsProps }) => {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(defaultOrder)
  const [selected, setSelected] = useState([])

  const data = stableSort(rows, getComparator(order, orderBy))

  const handleSort = property => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAll = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleSelect = name => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  return (
    <TableVirtuoso
      data={data}
      components={VirtuosoComponents}
      fixedHeaderContent={() => (
        <FixedHeaderContent
          columns={columns}
          rowCount={rows.length}
          selectedCount={selected.length}
          order={order}
          orderBy={orderBy}
          onClick={handleSort}
          onSelectAllClick={handleSelectAll}
        />
      )}
      itemContent={(_index, row) => (
        <RowContent
          index={_index}
          row={row}
          columns={columns}
          selected={selected}
          onSelectClick={handleSelect}
        >
          {componentsProps?.rowContent?.children}
        </RowContent>
      )}
      rowSpan={2}
      overscan={{ main: 5, reverse: 5 }}
    />
  )
}

export default VirtualizedTable
