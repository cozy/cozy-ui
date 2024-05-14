import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'
import cx from 'classnames'

import List from '../List'
import Input from '../Input'
import Typography from '../Typography'
import ItemRow from './ItemRow'
import { makeHistory } from './helpers'
import styles from './styles.styl'

export { ItemRow }

/**
 * Select like component to choose an option among a list of options.
 * Options can have children; selecting an option that has children
 * will show the children of the chosen option instead of selecting
 * the option.
 */
const NestedSelect = ({
  onSelect,
  ContentComponent,
  HeaderComponent,
  canSelectParent,
  isSelected,
  title,
  transformParentItem,
  radioPosition,
  ellipsis,
  options,
  searchOptions,
  noDivider
}) => {
  const innerRef = useRef()
  const [state, setState] = useState({
    history: makeHistory(options, canSelectParent),
    searchValue: '',
    searchResult: []
  })

  const handleBack = () => {
    const [item, ...newHistory] = state.history

    setState(state => ({ ...state, history: newHistory }))

    return item
  }

  const handleNavToChildren = item => {
    const newHistory = [item, ...state.history]
    setState(state => ({ ...state, history: newHistory }))
  }

  const handleSelect = item => {
    onSelect(item)
  }

  const handleClickItem = item => {
    if (item.children && item.children.length > 0) {
      handleNavToChildren(item)
    } else {
      handleSelect(item)
    }
  }

  const onChange = ev => {
    const onSearch = searchOptions?.onSearch

    if (onSearch) {
      const searchValue = ev.target.value
      const searchResult = onSearch(searchValue)
      setState(state => ({ ...state, searchValue, searchResult }))
    }
  }

  const current = state.history[0]
  const children = current.children || []
  const level = state.history.length - 1
  const parentItem = transformParentItem(omit(current, 'children'))

  const hasSearchResult = state.searchValue?.length > 0
  const isSelectedWithLevel = item => isSelected(item, level)
  const currentTitle = current.title || title

  return (
    <span ref={innerRef}>
      {HeaderComponent ? (
        <HeaderComponent
          title={currentTitle}
          showBack={state.history.length > 1}
          onClickBack={handleBack}
        />
      ) : null}
      {level > 0
        ? current.header
          ? current.header
          : typeof options.childrenHeader === 'function'
          ? options.childrenHeader(level)
          : options.childrenHeader
        : options.header}
      <ContentComponent>
        {canSelectParent && level > 0 ? (
          <ItemRow
            radioPosition={radioPosition}
            item={parentItem}
            onClick={handleClickItem}
            isSelected={isSelectedWithLevel(parentItem)}
            ellipsis={ellipsis}
            noDivider={noDivider}
          />
        ) : null}
        {searchOptions && level === 0 && (
          <div
            className={cx('u-ml-1 u-mb-half', {
              'u-mr-1': currentTitle,
              [styles['search-container--without-title']]: !currentTitle
            })}
          >
            <Input
              placeholder={searchOptions.placeholderSearch}
              onChange={onChange}
              value={state.searchValue}
            />
          </div>
        )}

        {hasSearchResult ? (
          state.searchResult.length === 0 ? (
            <Typography
              variant="body1"
              className="u-flex u-flex-justify-center u-mb-1 "
            >
              {searchOptions.noDataLabel}
            </Typography>
          ) : (
            state.searchResult.map((item, index) => (
              <ItemRow
                radioPosition={radioPosition}
                key={item.key || item.title}
                item={item}
                onClick={handleClickItem}
                isSelected={isSelectedWithLevel(item)}
                isLast={index === state.searchResult.length - 1}
                ellipsis={ellipsis}
                noDivider={noDivider}
              />
            ))
          )
        ) : (
          children.map((item, index) => (
            <ItemRow
              radioPosition={radioPosition}
              key={item.key || item.title}
              item={item}
              onClick={handleClickItem}
              isSelected={isSelectedWithLevel(item)}
              isLast={index === children.length - 1}
              ellipsis={ellipsis}
              noDivider={noDivider}
            />
          ))
        )}
      </ContentComponent>
    </span>
  )
}

NestedSelect.defaultProps = {
  ContentComponent: List,
  HeaderComponent: null,
  transformParentItem: x => x,
  radioPosition: 'right'
}

const ItemPropType = PropTypes.shape({
  /** Used to open NestedSelect on the element with this "id" value */
  focusedId: PropTypes.string,
  /** Header shown above options list */
  header: PropTypes.node,
  /** Icon shown on the left of the item */
  icon: PropTypes.element,
  /** Key used for the item, if not passed, title is used */
  key: PropTypes.string,
  /** Label used for the item */
  title: PropTypes.node,
  /** Description of the item */
  description: PropTypes.node,
  /** Options below the current one */
  children: PropTypes.array,
  /** Additional information */
  info: PropTypes.node,
  /** Action displayed to the right of item */
  action: PropTypes.shape({
    /** Component to render */
    Component: PropTypes.func,
    /** Props to pass to the component */
    props: PropTypes.object
  })
})

NestedSelect.propTypes = {
  /** Can be set to "right" or "left". Defaults to "right" */
  radioPosition: PropTypes.oneOf(['left', 'right']),

  /** The whole option item is passed to this function when selected */
  onSelect: PropTypes.func.isRequired,

  /** Determines if the row looks selected. The `option` is passed as an argument. */
  isSelected: PropTypes.func.isRequired,

  /** Options that will be rendered as nested lists of choices */
  options: PropTypes.shape({
    /** Header shown above options list */
    header: PropTypes.node,
    /** Header shown above options list inside a children */
    childrenHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Array of options */
    children: PropTypes.arrayOf(ItemPropType)
  }),

  /** If true, parent option will be shown at the top of its children */
  canSelectParent: PropTypes.bool,

  /**
   * `parentItem` is passed into this function before being used to render
   * the parent item row (canSelectParent must be true).
   * Use this if you want the parent to have a different text on the "outer"
   * row than inside the "inner" row.
   *
   * @example
   * ```
   * const transformParentItem = item => ({ ...item, title: "Everything"})
   * ````
   */
  transformParentItem: PropTypes.func,

  /**
   * Search options defines :
   * - placeholder in input search
   * - the implementation of a search
   * - how to display the results of a search
   */
  searchOptions: PropTypes.shape({
    placeholderSearch: PropTypes.string.isRequired,
    noDataLabel: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
  }),

  /** To manage ellipsis on ItemRow */
  ellipsis: PropTypes.bool,

  /** Remove dividers after each row */
  noDivider: PropTypes.bool,

  /** Component to wrap the content  */
  ContentComponent: PropTypes.elementType
}

export default NestedSelect
