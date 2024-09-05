import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { CozyProvider } from 'cozy-client';
import CloudWallpaper from 'cozy-ui/docs/cloud-wallpaper.jpg';
import { BreakpointsProvider } from "cozy-ui/transpiled/react/providers/Breakpoints";
import I18n from "cozy-ui/transpiled/react/providers/I18n";
import { locales } from "cozy-ui/transpiled/react/Viewer/locales/index";
var demoTextFileResponse = {
  text: function text() {
    return new Promise(function (resolve) {
      return resolve('Hello World !');
    });
  }
};
var demoFilesByClass = {
  pdf: 'https://raw.githubusercontent.com/rospdf/pdf-php/2ccf7591fc2f18e63342ebfedad7997b08c34ed2/readme.pdf',
  audio: 'https://viewerdemo.cozycloud.cc/Z.mp3',
  video: 'https://viewerdemo.cozycloud.cc/Nextcloud.mp4',
  text: 'https://viewerdemo.cozycloud.cc/notes.md'
};
var mockClient = {
  plugins: {
    realtime: {
      subscribe: function subscribe() {},
      unsubscribe: function unsubscribe() {},
      unsubscribeAll: function unsubscribeAll() {}
    }
  },
  on: function on() {},
  collection: function collection() {
    return {
      getDownloadLinkById: function getDownloadLinkById(id) {
        return new Promise(function (resolve) {
          return resolve(demoFilesByClass[id]);
        });
      },
      download: function download() {
        return alert("This is a demo, there's no actual Cozy to download the file from ¯\\_(ツ)_/¯");
      },
      get: function get() {
        return new Promise(function (resolve) {
          return resolve({
            data: {
              links: {
                large: CloudWallpaper
              }
            }
          });
        });
      }
    };
  },
  getStackClient: function getStackClient() {
    return {
      uri: '',
      fetch: function fetch() {
        return new Promise(function (resolve) {
          return resolve(demoTextFileResponse);
        });
      }
    };
  },
  getClient: function getClient() {
    return mockClient;
  },
  store: {
    getState: function getState() {},
    subscribe: function subscribe() {},
    unsubscribe: function unsubscribe() {}
  },
  getQueryFromState: function getQueryFromState(queryName) {
    if (queryName === 'io.cozy.files/parent_folder') {
      return {
        data: {
          _id: 'parent_id',
          path: '/Parent'
        }
      };
    }
  },
  query: function query() {
    return {
      data: [{
        attributes: {
          slug: 'mespapiers'
        },
        links: {
          related: ''
        }
      }]
    };
  },
  getInstanceOptions: function getInstanceOptions() {
    return {
      app: {
        slug: 'mespapiers'
      },
      subdomain: 'flat'
    };
  }
};

var Wrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  var _super = _createSuper(Wrapper);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _super.apply(this, arguments);
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      var lang = localStorage.getItem('lang') || 'en';
      return /*#__PURE__*/React.createElement(CozyProvider, {
        client: mockClient
      }, /*#__PURE__*/React.createElement(BreakpointsProvider, null, /*#__PURE__*/React.createElement(I18n, {
        dictRequire: function dictRequire(lang) {
          return locales[lang];
        },
        lang: lang
      }, this.props.children)));
    }
  }]);

  return Wrapper;
}(React.Component);

export default Wrapper;