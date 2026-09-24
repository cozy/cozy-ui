import React from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import en from './locales/en.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import vi from './locales/vi.json'
import TableCell from '../../TableCell'
import TableSortLabel from '../../TableSortLabel'
import { makeStyles } from '../../styles'

const locales = { en, fr, ru, vi }

const useStyles = makeStyles({
  root: {
    width: ({ column }) => column.width,
    maxWidth: ({ column }) => column.maxWidth
  }
})

const TableHeadCell = ({
  className,
  column,
  orderBy,
  orderDirection,
  onClick
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const classes = useStyles({ column })

  return (
    <TableCell
      key={column.id}
      classes={classes}
      className={column.noWrap ? 'u-ellipsis' : undefined}
      align={column.textAlign ?? 'left'}
      padding={column.disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === column.id ? orderDirection : false}
    >
      {column.sortable !== false ? (
        <TableSortLabel
          active={orderBy === column.id}
          direction={orderBy === column.id ? orderDirection : 'asc'}
          onClick={onClick}
        >
          {column.label}
          {orderBy === column.id && (
            <span className={className}>
              {orderDirection === 'desc'
                ? t('VirtualizedTable.sortedDesc')
                : t('VirtualizedTable.sortedAsc')}
            </span>
          )}
        </TableSortLabel>
      ) : (
        column.label
      )}
    </TableCell>
  )
}

export default TableHeadCell
