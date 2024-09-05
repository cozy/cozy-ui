import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import cx from 'classnames';
import clamp from 'lodash/clamp';
import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
var styles = {
  "InfosCarrousel": "styles__InfosCarrousel___1-aJZ",
  "InfosCarrousel-navigation": "styles__InfosCarrousel-navigation___2Cm0M",
  "InfosCarrousel-separator": "styles__InfosCarrousel-separator___3GYRV"
};
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import LeftIcon from "cozy-ui/transpiled/react/Icons/Left";
import RightIcon from "cozy-ui/transpiled/react/Icons/Right";

var useClampedValue = function useClampedValue(initialValue, min, max) {
  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var setClampedValue = function setClampedValue(newVal) {
    return setValue(clamp(newVal, min, max));
  };

  useEffect(function () {
    setClampedValue(value); // TODO: validate the deps are correct
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);
  return [clamp(value, min, max), setClampedValue];
};

var InfosCarrousel = function InfosCarrousel(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      className = _ref.className,
      swipeableProps = _ref.swipeableProps,
      previousButtonProps = _ref.previousButtonProps,
      nextButtonProps = _ref.nextButtonProps;
  var count = React.Children.count(children);

  var _useClampedValue = useClampedValue(0, 0, count - 1),
      _useClampedValue2 = _slicedToArray(_useClampedValue, 2),
      index = _useClampedValue2[0],
      setIndex = _useClampedValue2[1];

  var goToNextInfos = function goToNextInfos() {
    return setIndex(index + 1);
  };

  var goToPreviousInfos = function goToPreviousInfos() {
    return setIndex(index - 1);
  };

  var hasPreviousInfos = index === 0;
  var hasNextInfos = index === count - 1;
  var onChangeIndex = useCallback(function (index) {
    var onChangeIndexProp = swipeableProps.onChangeIndex;

    if (onChangeIndexProp) {
      onChangeIndexProp(index);
    }

    setIndex(index);
  }, [setIndex, swipeableProps]);
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles['InfosCarrousel'], className)
  }, /*#__PURE__*/React.createElement(SwipeableViews, _extends({
    index: index,
    animateHeight: true
  }, swipeableProps, {
    onChangeIndex: onChangeIndex
  }), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, {
      theme: child.props.theme || theme
    });
  })), React.Children.count(children) > 1 ? /*#__PURE__*/React.createElement("div", {
    className: styles['InfosCarrousel-navigation']
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: goToPreviousInfos,
    disabled: hasPreviousInfos,
    size: "medium"
  }, previousButtonProps), /*#__PURE__*/React.createElement(Icon, {
    icon: LeftIcon
  })), /*#__PURE__*/React.createElement("span", {
    className: styles['InfosCarrousel-separator']
  }), /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: goToNextInfos,
    disabled: hasNextInfos,
    size: "medium"
  }, nextButtonProps), /*#__PURE__*/React.createElement(Icon, {
    icon: RightIcon
  }))) : null);
};

InfosCarrousel.propTypes = {
  /** Infos components that will be rendered, one per carrousel slide */
  children: PropTypes.node,

  /** Controls the color scheme of the carrousel. This prop is passed onto child Infos, unless they have their own defined theme prop.  */
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),

  /** Extra classes to apply to the main wrapper */
  className: PropTypes.string,

  /** Props to pass to the underlying react-swipeable-views component */
  swipeableProps: PropTypes.object,

  /** Props for previous button */
  previousButtonProps: PropTypes.object,

  /** Props for next button */
  nextButtonProps: PropTypes.string
};
InfosCarrousel.defaultProps = {
  theme: 'primary'
};
export default InfosCarrousel;