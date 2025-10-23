import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from "cozy-ui/transpiled/react/Link";
import Typography from "cozy-ui/transpiled/react/Typography";

var Markdown = function Markdown(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/React.createElement(ReactMarkdown, {
    source: content,
    renderers: {
      link: function link(_ref2) {
        var children = _ref2.children,
            href = _ref2.href;
        return /*#__PURE__*/React.createElement(Link, {
          href: href,
          rel: "noreferrer",
          target: "_blank"
        }, children);
      },
      heading: function heading(_ref3) {
        var children = _ref3.children,
            level = _ref3.level;
        return /*#__PURE__*/React.createElement(Typography, {
          variant: "h".concat(level),
          className: "u-mb-1"
        }, children);
      },
      paragraph: function paragraph(_ref4) {
        var children = _ref4.children;
        return /*#__PURE__*/React.createElement(Typography, {
          variant: "body1",
          className: "u-mb-1"
        }, children);
      }
    }
  });
};

export default Markdown;