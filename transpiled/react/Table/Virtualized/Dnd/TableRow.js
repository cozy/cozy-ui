import _extends from "@babel/runtime/helpers/extends";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["item", "context", "componentsProps"];
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import TableRowClassic from "cozy-ui/transpiled/react/TableRow";

var TableRow = function TableRow(_ref) {
  var _componentsProps$tabl, _context$isNewItem;

  var item = _ref.item,
      context = _ref.context,
      componentsProps = _ref.componentsProps,
      props = _objectWithoutProperties(_ref, _excluded);

  var selectedItems = context.selectedItems,
      itemsInDropProcess = context.itemsInDropProcess,
      setItemsInDropProcess = context.setItemsInDropProcess,
      dragProps = context.dragProps;
  var onDrop = dragProps.onDrop,
      canDropProps = dragProps.canDrop,
      canDragProps = dragProps.canDrag,
      dragId = dragProps.dragId;
  var isSelected = context === null || context === void 0 ? void 0 : context.isSelectedItem(item);
  var isDisabled = itemsInDropProcess.includes(item._id) || (componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$tabl = componentsProps.tableRow) === null || _componentsProps$tabl === void 0 ? void 0 : _componentsProps$tabl.disabled);
  var isNew = context === null || context === void 0 ? void 0 : (_context$isNewItem = context.isNewItem) === null || _context$isNewItem === void 0 ? void 0 : _context$isNewItem.call(context, item);

  var _useDrag = useDrag(function () {
    return {
      type: dragId,
      isDragging: function isDragging(monitor) {
        // put all selected items in isDragging state
        if (selectedItems.length > 0) {
          return selectedItems.some(function (selectedItem) {
            return selectedItem._id === item._id;
          });
        }

        return item._id === monitor.getItem().draggedItems[0]._id;
      },
      item: {
        draggedItems: selectedItems.length > 0 ? selectedItems : [item]
      },
      canDrag: function canDrag() {
        var defaultCanDrag = (canDragProps === null || canDragProps === void 0 ? void 0 : canDragProps(item)) || true; // if selectedItems is not empty, only the selected items can be dragged

        // if selectedItems is not empty, only the selected items can be dragged
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
  }, [item, selectedItems] // used to pass args inside returned object attributes
  ),
      _useDrag2 = _slicedToArray(_useDrag, 3),
      dragCollect = _useDrag2[0],
      dragRef = _useDrag2[1],
      dragRefPreview = _useDrag2[2];

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
                  setItemsInDropProcess(draggedItem.draggedItems.map(function (draggedItem) {
                    return draggedItem._id;
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
  }, [item._id, selectedItems] // used to pass args inside returned object attributes
  ),
      _useDrop2 = _slicedToArray(_useDrop, 2),
      dropCollect = _useDrop2[0],
      dropRef = _useDrop2[1]; // Tricks for the preview image to be empty
  // https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer


  useEffect(function () {
    dragRefPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }, [dragRefPreview]);
  return /*#__PURE__*/React.createElement(TableRowClassic, _extends({}, props, {
    ref: function ref(node) {
      return dragRef(dropRef(node));
    },
    selected: isSelected || dropCollect.isOver || isNew,
    className: cx(dragCollect.isDragging ? 'virtualized u-o-50' : 'virtualized'),
    disabled: isDisabled,
    hover: true
  }));
};

export default TableRow;