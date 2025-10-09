### React-Virtuoso

```jsx
import { useState } from 'react'
import VirtualizedTable from 'cozy-ui/transpiled/react/Table/Virtualized'
import Variants from 'cozy-ui/docs/components/Variants'
import Typography from 'cozy-ui/transpiled/react/Typography'
import SelectionProvider, { useSelection } from 'cozy-ui/transpiled/react/providers/Selection'

const createData = (id, name, calories, fat, carbs, protein) => {
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData(0, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(1, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(2, 'Donut', 452, 25.0, 51, 4.9),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(7, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(8, 'KitKat', 518, 26.0, 65, 7.0),
  createData(9, 'Oreo', 437, 18.0, 63, 4.0),
  createData(10, 'Marshmallow', 318, 0, 81, 2.0),
  createData(11, 'Lollipop', 392, 0.2, 98, 0.0),
  createData(12, 'Nougat', 360, 19.0, 9, 37.0),
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

const initialVariants = [{ grouped: false }]

// Very basic usage only works when Dessert is sorted "asc"
// Ideally you have to create a logic to create groups with sorted data
const makeGroups = () => ({ groupLabels: ['C', 'D', 'E', 'Others'], groupCounts: [1,1,1,11] })

const ExampleTable = ({ variant, ...props }) => {
  const { selectedItemsId, isSelectedItem, toggleSelectedItem, toggleSelectAllItems } = useSelection()

  const onSortChange = ({ order, orderBy }) => {
    console.info('order:', order, 'oderBy:', orderBy)
  }

  return (
    <VirtualizedTable
      {...props}
      rows={rows}
      columns={columns}
      groups={variant.grouped ? makeGroups : undefined}
      selectedItems={selectedItemsId}
      isSelectedItem={row => isSelectedItem(row.id)}
      onSelect={(row, event, index) => toggleSelectedItem(row.id)}
      onSelectAll={rows => toggleSelectAllItems(rows.map(item => item.id))}
      onSortChange={onSortChange}
      componentsProps={{
        rowContent: {
          onClick: (row, column) => { console.info(`click on cell. Row ${row['id']}, Column ${column['id']}`) },
          onLongPress: (row, column) => { console.info(`long press on cell. Row ${row['id']}, Column ${column['id']}`) },
        },
      }}
    />
  )
}

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      <Typography variant="h4">Not sorted table</Typography>
      <div className="u-mt-half" style={{ border: "1px solid var(--borderMainColor)", height: 400, width: "100%" }}>
        <SelectionProvider>
          <ExampleTable variant={variant} />
        </SelectionProvider>
      </div>
      <Typography className="u-mt-1" variant="h4">Sorted table</Typography>
      <div className="u-mt-half" style={{ border: "1px solid var(--borderMainColor)", height: 400, width: "100%" }}>
        <SelectionProvider>
          <ExampleTable variant={variant} defaultOrder={{by: columns[0].id, direction: 'asc'}} />
        </SelectionProvider>
      </div>
    </>
  )}
</Variants>
```
