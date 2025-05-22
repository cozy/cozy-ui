const descendingComparator = ({ a, b, order, orderBy, lang }) => {
  const aValue = a[orderBy]
  const bValue = b[orderBy]

  if (typeof aValue === 'string') {
    const isDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}/.test(aValue)
    const isNumber = !isNaN(parseInt(aValue))

    if (isDate) {
      return new Date(bValue) - new Date(aValue)
    }

    if (isNumber) {
      return parseInt(bValue) - parseInt(aValue)
    }

    const { compare } = Intl.Collator(lang || 'en', {
      caseFirst: order === 'asc' ? 'upper' : 'lower'
    })

    return compare(bValue, aValue)
  }

  return bValue - aValue
}

export const getComparator = (order, orderBy, lang) => {
  return order === 'desc'
    ? (a, b) => descendingComparator({ a, b, order, orderBy, lang })
    : (a, b) => -descendingComparator({ a, b, order, orderBy, lang })
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
