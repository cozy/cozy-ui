import debounce from 'lodash/debounce';
import React, { useMemo } from 'react';
import SearchBar from "cozy-ui/transpiled/react/SearchBar";

var SearchInput = function SearchInput(_ref) {
  var setSearchValue = _ref.setSearchValue;
  var delayedSetSearchValue = useMemo(function () {
    return debounce(function (searchValue) {
      return setSearchValue(searchValue);
    }, 375);
  }, [setSearchValue]);

  var handleOnChange = function handleOnChange(ev) {
    delayedSetSearchValue(ev.target.value);
  };

  return /*#__PURE__*/React.createElement(SearchBar, {
    size: "small",
    elevation: 0,
    onChange: handleOnChange
  });
};

export default SearchInput;