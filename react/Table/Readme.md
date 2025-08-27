### React-Virtuoso

```jsx
import VirtualizedTable from 'cozy-ui/transpiled/react/Table/Virtualized'
import Variants from 'cozy-ui/docs/components/Variants'

const createData = (id, name, calories, fat, carbs, protein) => {
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData(0, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(1, 'Donut', 452, 25.0, 51, 4.9),
  createData(2, 'Eclair', 262, 16.0, 24, 6.0),
  createData(3, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(4, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(5, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(6, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(7, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(8, 'KitKat', 518, 26.0, 65, 7.0),
  createData(9, 'Lollipop', 392, 0.2, 98, 0.0),
  createData(10, 'Marshmallow', 318, 0, 81, 2.0),
  createData(11, 'Nougat', 360, 19.0, 9, 37.0),
  createData(12, 'Oreo', 437, 18.0, 63, 4.0),
  createData(
    13,
    'Ice cream with a very long list of ingredient to see how the table can handle this kind of item, and this is the end',
    237,
    9.0,
    37,
    4.3
  )
]

const columns = [
  {
    id: 'name',
    disablePadding: true,
    label: 'Dessert'
  },
  {
    id: 'calories',
    disablePadding: false,
    width: 80,
    label: 'Calories',
    textAlign: 'left',
    sortable: false
  },
  {
    id: 'fat',
    disablePadding: false,
    width: 85,
    label: 'Fat (g)',
    textAlign: 'right'
  },
  {
    id: 'carbs',
    disablePadding: false,
    width: 115,
    label: 'Carbs (g)',
    textAlign: 'right'
  },
  {
    id: 'protein',
    disablePadding: false,
    width: 115,
    label: 'Protein (g)',
    textAlign: 'right',
    disableClick: true
  }
]

initialState = { selectedItemsId: [] }

const isSelectedItem = row => state.selectedItemsId.some(selectedItem => selectedItem === row.id)
const addSelected = row => setState(prev => {
    const arr = prev.selectedItemsId
    arr.push(row.id)
    return { selectedItemsId: arr }
})
const removeSelected = (row) => setState(prev => {
    const arr = prev.selectedItemsId
    arr.splice(arr.indexOf(row.id), 1)
    return { selectedItemsId: arr }
})
const onSelect = row => {
  if (isSelectedItem(row)) {
    removeSelected(row)
  } else {
    addSelected(row)
  }
}
const onSelectAll = rows => {
  const ids = rows.map(row => row.id)
  if (state.selectedItemsId.length === ids.length) {
    setState({ selectedItemsId: [] })
  } else {
    setState({ selectedItemsId: ids })
  }
}

const initialVariants = [{ grouped: false }]

const makeGroups = () => ({ groupLabels: ['C', 'D', 'Others'], groupCounts: [1,1,12] })

/**
 * @param order
 * @param orderBy
 */
const onSortChange = ({ order, orderBy }) => {
  setState({ order, orderBy })
}

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <div style={{ border: "1px solid var(--borderMainColor)", height: 400, width: "100%" }}>
      <VirtualizedTable
        rows={rows}
        columns={columns}
        groups={variant.grouped ? makeGroups : undefined}
        defaultOrder={columns[0].id}
        selectedItems={state.selectedItemsId}
        isSelectedItem={row => isSelectedItem(row)}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        onSortChange={onSortChange}
        componentsProps={{
          rowContent: {
            onClick: (row, column) => { console.info(`click on cell. Row ${row['id']}, Column ${column['id']}`) },
            onLongPress: (row, column) => { console.info(`long press on cell. Row ${row['id']}, Column ${column['id']}`) },
          },
        }}
      />
    </div>
  )}
</Variants>
```
