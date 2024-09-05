import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import BottomSheetContent from "cozy-ui/transpiled/react/Viewer/Footer/BottomSheetContent";
import { extractChildrenCompByName } from "cozy-ui/transpiled/react/Viewer/Footer/helpers";
import BottomSheet, { BottomSheetHeader } from "cozy-ui/transpiled/react/BottomSheet";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import PrintButton from "cozy-ui/transpiled/react/Viewer/components/PrintButton";
import { isValidForPanel } from "cozy-ui/transpiled/react/Viewer/helpers";

var FooterButtons = function FooterButtons(_ref) {
  var file = _ref.file,
      _ref$FooterActionButt = _ref.FooterActionButtonsWithFile,
      FooterActionButtonsWithFile = _ref$FooterActionButt === void 0 ? {
    FooterActionButtonsWithFile: FooterActionButtonsWithFile
  } : _ref$FooterActionButt;
  return /*#__PURE__*/React.createElement(React.Fragment, null, FooterActionButtonsWithFile, /*#__PURE__*/React.createElement(PrintButton, {
    file: file,
    variant: "button"
  }));
};

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

var FooterContent = function FooterContent(_ref2) {
  var file = _ref2.file,
      toolbarRef = _ref2.toolbarRef,
      children = _ref2.children,
      isPublic = _ref2.isPublic;
  var styles = useStyles();
  var toolbarProps = useMemo(function () {
    return {
      ref: toolbarRef
    };
  }, [toolbarRef]);
  var FooterActionButtonsWithFile = extractChildrenCompByName({
    children: children,
    file: file,
    name: 'FooterActionButtons'
  });
  var bottomSheetSettings = {
    isOpenMin: isPublic ? true : false,
    mediumHeightRatio: isPublic ? undefined : 0.5
  };

  if (isValidForPanel({
    file: file
  })) {
    return /*#__PURE__*/React.createElement(BottomSheet, {
      toolbarProps: toolbarProps,
      portalProps: {
        disablePortal: true
      },
      settings: bottomSheetSettings
    }, /*#__PURE__*/React.createElement(BottomSheetHeader, {
      className: cx('u-ph-1 u-pb-1', styles.bottomSheetHeader)
    }, /*#__PURE__*/React.createElement(FooterButtons, {
      file: file,
      FooterActionButtonsWithFile: FooterActionButtonsWithFile
    })), /*#__PURE__*/React.createElement(BottomSheetContent, {
      file: file,
      isPublic: isPublic
    }));
  } // If `FooterActionButtons` hasn't children


  if (!FooterActionButtonsWithFile) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.footer
  }, /*#__PURE__*/React.createElement(FooterButtons, {
    file: file,
    FooterActionButtonsWithFile: FooterActionButtonsWithFile
  }));
};

FooterContent.propTypes = {
  file: PropTypes.object.isRequired,
  toolbarRef: PropTypes.object,
  isPublic: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};
export default FooterContent;