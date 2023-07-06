import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import Hammer from 'hammerjs';
import FileImageLoader from "cozy-ui/transpiled/react/FileImageLoader";
import ViewerSpinner from "cozy-ui/transpiled/react/Viewer/components/ViewerSpinner";
import NoNetworkViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/NoNetworkViewer";
var styles = {
  "viewer-imageviewer": "styles__viewer-imageviewer___26k0p",
  "viewer-noviewer": "styles__viewer-noviewer___auG-6",
  "viewer-audioviewer": "styles__viewer-audioviewer___1OQPB",
  "viewer-videoviewer": "styles__viewer-videoviewer___NhFoe",
  "viewer-pdfviewer": "styles__viewer-pdfviewer___1gTP9",
  "viewer-textviewer": "styles__viewer-textviewer___3u5Zw",
  "viewer-canceled": "styles__viewer-canceled___pOA_O",
  "viewer-textviewer-content": "styles__viewer-textviewer-content___PB-c3",
  "viewer-filename": "styles__viewer-filename___3jZCt",
  "viewer-pdfviewer-pdf": "styles__viewer-pdfviewer-pdf___16ID9",
  "viewer-pdfviewer-page": "styles__viewer-pdfviewer-page___2RPuw",
  "viewer-pdfviewer-toolbar": "styles__viewer-pdfviewer-toolbar___3NXOk",
  "viewer-pdfMobile": "styles__viewer-pdfMobile___25FPg",
  "viewer-pdfMobile--image": "styles__viewer-pdfMobile--image___3gpFL"
};
var MIN_SCALE = 1;
var MAX_SCALE = 6;
var MASS = 10; // If a paning gesture is released while the finger is still moving, the photo will keep paning for a little longer (a if you threw the photo). MASS determines how much the photo will keep paning (the higher the number, the more it will keep going)

var FRICTION = 0.9; // When the photo is paning after a pan gesture ended suddenly, FRICTION determines how quickly the movement slows down. 0 would stop it imediately, 1 doesn't slow it down at all.

var clamp = function clamp(min, value, max) {
  return Math.max(min, Math.min(max, value));
};

var ImageViewer = /*#__PURE__*/function (_Component) {
  _inherits(ImageViewer, _Component);

  var _super = _createSuper(ImageViewer);

  function ImageViewer(props) {
    var _this;

    _classCallCheck(this, ImageViewer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "reload", function () {
      _this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true,
          canceled: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageError", function () {
      _this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          canceled: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageLoad", function () {
      _this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipe", function (e) {
      // when a swipe happens while zoomed into an image, it's most likely a pan gesture and not a swipe
      if (_this.state.scale > 1) return; // a pan event is triggered after the swipe and may trigger a getBoundingClientRect error

      _this.gestures.off('pan');

      _this.gestures.off('panend');

      _this.props.onSwipe(e);
    });

    _this.state = {
      loading: true,
      canceled: false,
      scale: 1,
      offsetX: 0,
      offsetY: 0,
      initialOffset: {
        x: 0,
        y: 0
      },
      initialScale: 0,
      momentum: {
        x: 0,
        y: 0
      }
    };
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.file && this.props.file && nextProps.file.id !== this.props.file.id) {
        this.tearDownGestures();
        this.setState({
          loading: true,
          canceled: false,
          scale: 1,
          offsetX: 0,
          offsetY: 0
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.gestures) this.initGestures();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var wasLoading = prevState.loading && !this.state.loading && !this.state.canceled;
      if (!prevProps.gestures) this.initGestures();
      if (wasLoading) this.setupGestures();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.tearDownGestures();
    }
  }, {
    key: "tearDownGestures",
    value: function tearDownGestures() {
      if (this.gestures) {
        this.gestures.off('swipe');
        this.gestures.on('swipe', this.props.onSwipe);
        this.gestures.off('panstart');
        this.gestures.off('pinchstart');
        this.gestures.off('pinchend');
        this.gestures.off('pan');
        this.gestures.off('pinch');
        this.gestures.off('panend');
      }
    }
  }, {
    key: "initGestures",
    value: function initGestures() {
      this.gestures = this.props.gestures;
      this.viewer = this.props.gesturesRef;
    }
  }, {
    key: "setupGestures",
    value: function setupGestures() {
      var _this2 = this;

      // We replace the swipe handler by ours
      this.gestures.off('swipe');
      this.gestures.on('swipe', this.onSwipe);
      this.gestures.get('pinch').set({
        enable: true
      });
      this.gestures.get('pan').set({
        direction: Hammer.DIRECTION_ALL
      }); // During a gesture, everything is computed with a base value (the state of the image when the gesture starts) and a delta (a translation / zoom, described by the gesture). When a gesture starts, we record the current state of the image.

      this.gestures.on('panstart', this.prepareForGesture.bind(this));
      this.gestures.on('pinchstart', this.prepareForGesture.bind(this)); // It frequently happens that at the end of a pinch gesture, a pan gesture is detected — because the fingers don't come off the screen at exactly the same time. Reseting the values at the end of the pinch makes sure the values are correct for the (accidental) pan event.

      this.gestures.on('pinchend', this.prepareForGesture.bind(this)); // during a pan, we add the gestures delta to the initial offset to get the new offset. The new offset is then scaled : if the pan distance was 100px, but the image was scaled 2x, the actual offset should only be 50px. FInally, this value is clamped to make sure the user can't pan further than the edges.

      this.gestures.on('pan', function (e) {
        _this2.setState(function (state) {
          var maxOffset = _this2.computeMaxOffset();

          return {
            offsetX: clamp(-maxOffset.x, state.initialOffset.x + e.deltaX / state.scale, maxOffset.x),
            offsetY: clamp(-maxOffset.y, state.initialOffset.y + e.deltaY / state.scale, maxOffset.y)
          };
        });
      }); // pinching / zooming / scaling is a bit more complicated, because the gesture's center has to be taken into account

      this.gestures.on('pinch', function (e) {
        if (e.isFinal) return; // hard to reproduce, but the final event seems to be causing problems and since it's just replaying the previous event, it can safely be discared

        _this2.setState(function (state) {
          // first we compute the scale factor: this is the number by which we will multiply the initial scale (as it was before the gesture started) to get the final scaling value. So if the initial scale is 2, and the scale factor is 1.5, the final scale will be 3.
          // this value is clamped so so it stays within reasonable zoom limits.
          var scaleFactor = clamp(MIN_SCALE / state.initialScale, e.scale, MAX_SCALE / state.initialScale); // When the user is zooming in or out, we want that the origin point of the gesture to stay in exactly the same place. The scaling origin is in the center of the viewer.
          // If the gesture's origin is the same as the scaling origin, this works "out of the box" — you can imagine the pixels on all sides being "pushed" towards the outside. But if the gesture's origin is not in the center, we need to offset the whole image to produce the illusion that the scaling center is there.
          // compute the center of the viewer

          var wrapperBoundaries = _this2.viewer.getBoundingClientRect();

          var viewerCenter = {
            x: (wrapperBoundaries.right - wrapperBoundaries.left) / 2,
            y: (wrapperBoundaries.bottom - wrapperBoundaries.top) / 2
          }; // Compute the delta between the viewer's center and the gesture's center. This value is scaled back to the "natural" size — if the delta is 100px but the image is currently scale 2x, the real offset value is only 50px.

          var offsetBeforeScale = {
            x: (viewerCenter.x - e.center.x) / state.scale,
            y: (viewerCenter.y - e.center.y) / state.scale
          }; // Now we compute what this offset will be once we apply the new scale

          var offsetAfterScale = {
            x: offsetBeforeScale.x * scaleFactor,
            y: offsetBeforeScale.y * scaleFactor
          }; // finally, we compute the actual offset we want to apply. This is the difference between the offset *after* scaling and the offset *before* scaling. We also add any existing offset to preserve it (otherwise it is reset to the center each time)

          var finalOffset = {
            x: offsetAfterScale.x - offsetBeforeScale.x + state.initialOffset.x,
            y: offsetAfterScale.y - offsetBeforeScale.y + state.initialOffset.y
          }; // last thing: the offsets are clamped to make sure the offsetting doesn't go further than the edges

          var maxOffset = _this2.computeMaxOffset();

          return {
            scale: state.initialScale * scaleFactor,
            offsetX: clamp(-maxOffset.x, finalOffset.x, maxOffset.x),
            offsetY: clamp(-maxOffset.y, finalOffset.y, maxOffset.y)
          };
        });
      });
      this.gestures.on('panend', function (e) {
        // convert the remaining velocity into momentum
        _this2.setState({
          momentum: {
            x: e.velocityX * MASS,
            y: e.velocityY * MASS
          }
        }, _this2.applyMomentum.bind(_this2));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.canceled) {
        return /*#__PURE__*/React.createElement(NoNetworkViewer, {
          onReload: this.reload
        });
      }

      var _this$props = this.props,
          file = _this$props.file,
          url = _this$props.url;
      var _this$state = this.state,
          scale = _this$state.scale,
          offsetX = _this$state.offsetX,
          offsetY = _this$state.offsetY,
          loading = _this$state.loading;
      var style = {
        transform: "scale(".concat(scale, ") translate(").concat(offsetX, "px, ").concat(offsetY, "px)")
      };
      return /*#__PURE__*/React.createElement("div", {
        className: styles['viewer-imageviewer']
      }, loading && /*#__PURE__*/React.createElement(ViewerSpinner, null), file && /*#__PURE__*/React.createElement(FileImageLoader, {
        file: file,
        url: url,
        linkType: "large",
        onError: this.onImageError,
        key: file.id,
        render: function render(src) {
          return /*#__PURE__*/React.createElement("img", {
            ref: function ref(photo) {
              return _this3.photo = photo;
            },
            style: style,
            alt: file.name,
            src: src,
            onLoad: _this3.onImageLoad
          });
        }
      }));
    }
    /**
     * Things to do when a gesture starts:
     * - saves the current scale and offset, which will be used as base values for calculations
     * - kill any remaining momentum from previous gestures
     * - hide the actions
     */

  }, {
    key: "prepareForGesture",
    value: function prepareForGesture() {
      this.setState(function (state) {
        return {
          initialScale: state.scale,
          initialOffset: {
            x: state.offsetX,
            y: state.offsetY
          },
          momentum: {
            x: 0,
            y: 0
          }
        };
      });
    }
    /**
     * Gradually applies the momentum after a pan end
     */

  }, {
    key: "applyMomentum",
    value: function applyMomentum() {
      var _this4 = this;

      this.setState(function (state) {
        var maxOffset = _this4.computeMaxOffset();

        return {
          offsetX: clamp(-maxOffset.x, state.offsetX + state.momentum.x, maxOffset.x),
          offsetY: clamp(-maxOffset.y, state.offsetY + state.momentum.y, maxOffset.y),
          momentum: {
            x: state.momentum.x * FRICTION,
            y: state.momentum.y * FRICTION
          }
        };
      }, function () {
        if (Math.abs(_this4.state.momentum.x) > 0.1 || Math.abs(_this4.state.momentum.y) > 0.1) requestAnimationFrame(_this4.applyMomentum.bind(_this4));
      });
    }
    /**
     * Compute the maximum offset that can be applied to the photo on each axis before it goes over the edges
     * @returns {object} A point with an x and y property
     */

  }, {
    key: "computeMaxOffset",
    value: function computeMaxOffset() {
      if (this.viewer && this.photo) {
        var wrapperBoundaries = this.viewer.getBoundingClientRect();
        var photoBoundaries = this.photo.getBoundingClientRect();
        return {
          x: Math.max(photoBoundaries.width / 2 - wrapperBoundaries.width / 2, 0) / this.state.scale,
          y: Math.max(photoBoundaries.height / 2 - wrapperBoundaries.height / 2, 0) / this.state.scale
        };
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    }
  }]);

  return ImageViewer;
}(Component);

export default ImageViewer;