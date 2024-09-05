import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { mapToAllChildren } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";

var FooterActionButtons = function FooterActionButtons(_ref) {
  var children = _ref.children,
      file = _ref.file;
  if (!children) return null;
  return mapToAllChildren(children, function (child) {
    return /*#__PURE__*/cloneElement(child, {
      file: file
    });
  });
};

FooterActionButtons.displayName = 'FooterActionButtons';
FooterActionButtons.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  file: PropTypes.object
};
export default FooterActionButtons;