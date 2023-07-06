import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import 'intersection-observer'; // polyfill for safari (mobile and desktop)

var LoadMore = function LoadMore(_ref) {
  var fetchMore = _ref.fetchMore,
      label = _ref.label;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var elementRef = useRef();
  var startFetchMore = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isLoading) {
              _context.next = 5;
              break;
            }

            setIsLoading(true);
            _context.next = 4;
            return fetchMore();

          case 4:
            setIsLoading(false);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [isLoading, fetchMore]);
  var checkIntersectionsEntries = useCallback(function (intersectionEntries) {
    if (intersectionEntries.filter(function (entry) {
      return entry.isIntersecting;
    }).length > 0) startFetchMore();
  }, [startFetchMore]);
  useEffect(function () {
    var observer = new IntersectionObserver(checkIntersectionsEntries);
    /*
      The ref value 'elementRef.current' will likely have changed by the time this effect cleanup function runs
      It is better to copy the ref to a variable inside the effect
    */

    var observerRefValue = elementRef.current;
    observer.observe(observerRefValue);
    return function () {
      observer.unobserve(observerRefValue);
      observer.disconnect();
    };
  }, [checkIntersectionsEntries]);
  return /*#__PURE__*/React.createElement("span", {
    ref: elementRef
  }, /*#__PURE__*/React.createElement(Button, {
    theme: "text",
    onClick: startFetchMore,
    label: isLoading ? /*#__PURE__*/React.createElement(Spinner, {
      noMargin: true
    }) : label
  }));
};

LoadMore.propTypes = {
  /** A function that is called when the next batch of data needs to be loaded.  Can return a promise. */
  fetchMore: PropTypes.func.isRequired,

  /** The label for the button */
  label: PropTypes.string.isRequired
};
export default LoadMore;