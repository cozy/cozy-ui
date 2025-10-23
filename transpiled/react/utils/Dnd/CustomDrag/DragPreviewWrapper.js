import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import DragPreview from "cozy-ui/transpiled/react/utils/Dnd/CustomDrag/DragPreview";

var makeStyles = function makeStyles(_ref) {
  var x = _ref.x,
      y = _ref.y;

  if (!x || !y) {
    return {
      display: 'none'
    };
  }

  var transform = "translate(".concat(x, "px, ").concat(y, "px)");
  return {
    transform: transform,
    WebkitTransform: transform
  };
};

var DragPreviewWrapper = function DragPreviewWrapper(_ref2) {
  var item = _ref2.item,
      itemType = _ref2.itemType,
      dragId = _ref2.dragId,
      initialOffset = _ref2.initialOffset,
      currentOffset = _ref2.currentOffset;

  var _useState = useState({
    x: null,
    y: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      mousePosition = _useState2[0],
      setMousePosition = _useState2[1];

  useEffect(function () {
    var handleMouseMove = function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('dragover', handleMouseMove);
    return function () {
      window.removeEventListener('dragover', handleMouseMove);
    };
  }, []);

  if (!initialOffset || !currentOffset || itemType !== dragId) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: makeStyles(mousePosition)
  }, /*#__PURE__*/React.createElement(DragPreview, {
    fileName: item.draggedItems[0].name,
    selectedCount: item.draggedItems.length
  }));
};

export default DragPreviewWrapper;