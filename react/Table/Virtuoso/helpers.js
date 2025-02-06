const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

const createData = (id, name, calories, fat, carbs, protein) => {
  return { id, name, calories, fat, carbs, protein }
}

export const rows = [
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
  createData(12, 'Oreo', 437, 18.0, 63, 4.0)
]

export const columns = [
  {
    id: 'name',
    numeric: false,
    label: 'Dessert'
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    width: 115,
    label: 'Calories',
    textAlign: 'right'
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    width: 115,
    label: 'Fat (g)',
    textAlign: 'right'
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    width: 115,
    label: 'Carbs (g)',
    textAlign: 'right'
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    width: 115,
    label: 'Protein (g)',
    textAlign: 'right'
  }
]
