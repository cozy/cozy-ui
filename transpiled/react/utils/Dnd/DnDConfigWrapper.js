import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { forwardRef, useEffect, useState } from 'react';
import { useDragDropManager } from 'react-dnd';
var DnDConfigWrapper = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children;
  var dragDropManager = useDragDropManager();
  var monitor = dragDropManager.getMonitor();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  useEffect(function () {
    var unsubscribe = monitor.subscribeToStateChange(function () {
      setIsDragging(monitor.isDragging());
    });
    return function () {
      return unsubscribe();
    };
  }, [monitor]);
  useEffect(function () {
    if (!isDragging) return;
    var scrollThreshold = 100;
    var scrollMaxSpeed = 75;
    var intervalId = setInterval(function () {
      var offset = monitor.getClientOffset();
      var container = ref.current;
      if (!offset || !container) return;

      var _container$getBoundin = container.getBoundingClientRect(),
          top = _container$getBoundin.top,
          bottom = _container$getBoundin.bottom;

      var distanceToTop = offset.y - top;
      var distanceToBottom = bottom - offset.y;

      if (distanceToTop < scrollThreshold) {
        var speed = scrollMaxSpeed * (1 - distanceToTop / scrollThreshold);
        container.scrollBy(0, -speed);
      } else if (distanceToBottom < scrollThreshold) {
        var _speed = scrollMaxSpeed * (1 - distanceToBottom / scrollThreshold);

        container.scrollBy(0, _speed);
      }
    }, 16); // ~60fps

    return function () {
      return clearInterval(intervalId);
    };
  }, [isDragging, monitor, ref]);
  return children;
});
DnDConfigWrapper.displayName = 'DnDConfigWrapper';
export default DnDConfigWrapper;