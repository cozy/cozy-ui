import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import cx from 'classnames';
import React, { useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

var GridItem = function GridItem(_ref) {
  var _context$isSelectedIt;

  var item = _ref.item,
      context = _ref.context,
      renderItem = _ref.renderItem,
      className = _ref.className;

  var _ref2 = context || {},
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$itemsInDropProc = _ref2.itemsInDropProcess,
      itemsInDropProcess = _ref2$itemsInDropProc === void 0 ? [] : _ref2$itemsInDropProc,
      _ref2$setItemsInDropP = _ref2.setItemsInDropProcess,
      setItemsInDropProcess = _ref2$setItemsInDropP === void 0 ? function () {} : _ref2$setItemsInDropP,
      dragProps = _ref2.dragProps;

  var onDrop = dragProps.onDrop,
      canDropProps = dragProps.canDrop,
      canDragProps = dragProps.canDrag,
      dragId = dragProps.dragId;
  var isSelected = context === null || context === void 0 ? void 0 : (_context$isSelectedIt = context.isSelectedItem) === null || _context$isSelectedIt === void 0 ? void 0 : _context$isSelectedIt.call(context, item);
  var isDisabled = itemsInDropProcess.includes(item._id);

  var _useDrag = useDrag(function () {
    return {
      type: dragId,
      isDragging: function isDragging(monitor) {
        var _monitor$getItem$drag;

        if (selectedItems.length > 0) {
          return selectedItems.some(function (sel) {
            return sel._id === item._id;
          });
        }

        return item._id === ((_monitor$getItem$drag = monitor.getItem().draggedItems) === null || _monitor$getItem$drag === void 0 ? void 0 : _monitor$getItem$drag[0]._id);
      },
      item: {
        draggedItems: selectedItems.length > 0 ? selectedItems : [item]
      },
      canDrag: function canDrag() {
        var _canDragProps;

        var defaultCanDrag = (_canDragProps = canDragProps === null || canDragProps === void 0 ? void 0 : canDragProps(item)) !== null && _canDragProps !== void 0 ? _canDragProps : true;

        if (selectedItems.length > 0) {
          return defaultCanDrag && isSelected;
        }

        return defaultCanDrag;
      },
      collect: function collect(monitor) {
        return {
          isDragging: monitor.isDragging()
        };
      }
    };
  }, [item, selectedItems]),
      _useDrag2 = _slicedToArray(_useDrag, 3),
      isDragging = _useDrag2[0].isDragging,
      dragRef = _useDrag2[1],
      dragPreview = _useDrag2[2];

  var _useDrop = useDrop(function () {
    return {
      accept: dragId,
      canDrop: function canDrop() {
        return canDropProps ? canDropProps(item) : true;
      },
      drop: function () {
        var _drop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(draggedItem) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setItemsInDropProcess(draggedItem.draggedItems.map(function (dragged) {
                    return dragged._id;
                  }));
                  _context.next = 3;
                  return onDrop(draggedItem.draggedItems, item, selectedItems);

                case 3:
                  setItemsInDropProcess([]);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function drop(_x) {
          return _drop.apply(this, arguments);
        }

        return drop;
      }(),
      collect: function collect(monitor) {
        return {
          isOver: monitor.isOver()
        };
      }
    };
  }, [item._id, selectedItems]),
      _useDrop2 = _slicedToArray(_useDrop, 2),
      isOver = _useDrop2[0].isOver,
      dropRef = _useDrop2[1];

  useEffect(function () {
    dragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }, [dragPreview]);
  return /*#__PURE__*/React.createElement("div", {
    ref: function ref(node) {
      return dragRef(dropRef(node));
    },
    className: cx(className, isDragging ? 'virtualized u-o-50' : 'virtualized'),
    style: {
      opacity: isDisabled ? 0.5 : 1
    }
  }, renderItem(item, {
    isDragging: isDragging,
    isOver: isOver,
    isDisabled: isDisabled
  }));
};

export default GridItem;