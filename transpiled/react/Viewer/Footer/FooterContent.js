import React, { useMemo, Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BottomSheet, { BottomSheetHeader } from "cozy-ui/transpiled/react/BottomSheet";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import { isValidForPanel } from "cozy-ui/transpiled/react/Viewer/helpers";
import BottomSheetContent from "cozy-ui/transpiled/react/Viewer/Footer/BottomSheetContent";
var useStyles = makeStyles(function (theme) {
  return {
    footer: {
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 2rem)',
      height: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      borderTop: "1px solid ".concat(theme.palette.divider),
      columnGap: '0.5rem'
    },
    bottomSheetHeader: {
      columnGap: '0.5rem'
    }
  };
});

var FooterContent = function FooterContent(_ref) {
  var file = _ref.file,
      toolbarRef = _ref.toolbarRef,
      children = _ref.children;
  var styles = useStyles();
  var toolbarProps = useMemo(function () {
    return {
      ref: toolbarRef
    };
  }, [toolbarRef]);
  var FooterActionButtons = Children.toArray(children).find(function (child) {
    return child.type.name === 'FooterActionButtons' || child.type.displayName === 'FooterActionButtons';
  }) || null;
  var FooterActionButtonsWithFile = /*#__PURE__*/isValidElement(FooterActionButtons) ? /*#__PURE__*/cloneElement(FooterActionButtons, {
    file: file
  }) : null;

  if (isValidForPanel({
    file: file
  })) {
    return /*#__PURE__*/React.createElement(BottomSheet, {
      toolbarProps: toolbarProps,
      portalProps: {
        disablePortal: true
      },
      settings: {
        mediumHeightRatio: 0.5
      }
    }, /*#__PURE__*/React.createElement(BottomSheetHeader, {
      className: cx('u-ph-1 u-pb-1', styles.bottomSheetHeader)
    }, FooterActionButtonsWithFile), /*#__PURE__*/React.createElement(BottomSheetContent, {
      file: file
    }));
  } // If `FooterActionButtons` hasn't children


  if (!FooterActionButtons) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.footer
  }, FooterActionButtonsWithFile);
};

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
export default FooterContent;