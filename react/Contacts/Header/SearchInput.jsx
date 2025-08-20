import debounce from 'lodash/debounce'
import React, { useMemo } from 'react'

import SearchBar from '../../SearchBar'

const SearchInput = ({ setSearchValue }) => {
  const delayedSetSearchValue = useMemo(
    () => debounce(searchValue => setSearchValue(searchValue), 375),
    [setSearchValue]
  )

  const handleOnChange = ev => {
    delayedSetSearchValue(ev.target.value)
  }

  return <SearchBar size="small" elevation={0} onChange={handleOnChange} />
}

export default SearchInput
