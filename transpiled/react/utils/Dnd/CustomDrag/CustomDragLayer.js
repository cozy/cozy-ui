import React from 'react';
import { useDragLayer } from 'react-dnd';
import DragPreviewWrapper from "cozy-ui/transpiled/react/utils/Dnd/CustomDrag/DragPreviewWrapper";
var layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}; // Example find in the official documentation
// https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer

export var CustomDragLayer = function CustomDragLayer(_ref) {
  var dragId = _ref.dragId;

  var _useDragLayer = useDragLayer(function (monitor) {
    return {
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    };
  }),
      itemType = _useDragLayer.itemType,
      isDragging = _useDragLayer.isDragging,
      item = _useDragLayer.item,
      initialOffset = _useDragLayer.initialOffset,
      currentOffset = _useDragLayer.currentOffset;

  if (!isDragging) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: layerStyles
  }, /*#__PURE__*/React.createElement(DragPreviewWrapper, {
    item: item,
    itemType: itemType,
    dragId: dragId,
    initialOffset: initialOffset,
    currentOffset: currentOffset
  }));
};
export default CustomDragLayer;