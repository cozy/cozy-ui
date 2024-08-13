import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, createRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isExpiringSoon, formatMetadataQualification, KNOWN_BILLS_ATTRIBUTES_NAMES, getMetadataQualificationType } from 'cozy-client/dist/models/paper';
import List from "cozy-ui/transpiled/react/List";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import ExpirationAlert from "cozy-ui/transpiled/react/Viewer/components/ExpirationAlert";
import ActionMenuWrapper from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuWrapper";
import QualificationListItemContact from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemContact";
import QualificationListItemDate from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemDate";
import QualificationListItemInformation from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemInformation";
import QualificationListItemOther from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemOther";
var ComponentFromMetadataQualificationType = {
  contact: QualificationListItemContact,
  date: QualificationListItemDate,
  information: QualificationListItemInformation,
  other: QualificationListItemOther,
  bills: QualificationListItemInformation
};

var isExpirationAlertHidden = function isExpirationAlertHidden(file) {
  var _file$metadata$hideEx, _file$metadata;

  return (_file$metadata$hideEx = file === null || file === void 0 ? void 0 : (_file$metadata = file.metadata) === null || _file$metadata === void 0 ? void 0 : _file$metadata.hideExpirationAlert) !== null && _file$metadata$hideEx !== void 0 ? _file$metadata$hideEx : false;
};

var Qualification = function Qualification(_ref) {
  var _file$bills2;

  var file = _ref.file;
  var _file$metadata2 = file.metadata,
      metadata = _file$metadata2 === void 0 ? {} : _file$metadata2;
  var actionBtnRef = useRef([]);

  var _useState = useState({
    id: '',
    name: '',
    value: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      optionFile = _useState2[0],
      setOptionFile = _useState2[1];

  var hideActionsMenu = function hideActionsMenu() {
    setOptionFile({
      id: '',
      name: '',
      value: ''
    });
  };

  var _toggleActionsMenu = function toggleActionsMenu(id, name, value) {
    setOptionFile(function (prev) {
      if (prev.value) return {
        id: '',
        name: '',
        value: ''
      };
      return {
        id: id,
        name: name,
        value: value
      };
    });
  };

  var formattedMetadataQualification = useMemo(function () {
    var _file$bills, _file$bills$data;

    var relatedBills = (_file$bills = file.bills) === null || _file$bills === void 0 ? void 0 : (_file$bills$data = _file$bills.data) === null || _file$bills$data === void 0 ? void 0 : _file$bills$data[0];

    if (relatedBills) {
      var formattedBillsMetadata = KNOWN_BILLS_ATTRIBUTES_NAMES.map(function (attrName) {
        return {
          name: attrName,
          value: relatedBills[attrName]
        };
      });
      return formatMetadataQualification(metadata).concat(formattedBillsMetadata);
    }

    return formatMetadataQualification(metadata);
  }, [metadata, (_file$bills2 = file.bills) === null || _file$bills2 === void 0 ? void 0 : _file$bills2.data]);
  useEffect(function () {
    actionBtnRef.current = formattedMetadataQualification.map(function (_, idx) {
      var _actionBtnRef$current;

      return (_actionBtnRef$current = actionBtnRef.current[idx]) !== null && _actionBtnRef$current !== void 0 ? _actionBtnRef$current : /*#__PURE__*/createRef();
    });
  }, [formattedMetadataQualification]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isExpiringSoon(file) && !isExpirationAlertHidden(file) && /*#__PURE__*/React.createElement(ExpirationAlert, {
    file: file
  }), /*#__PURE__*/React.createElement(List, {
    className: 'u-pv-1'
  }, formattedMetadataQualification.map(function (meta, idx) {
    var name = meta.name;
    var metadataQualificationType = getMetadataQualificationType(name);
    var QualificationListItemComp = ComponentFromMetadataQualificationType[metadataQualificationType];
    return /*#__PURE__*/React.createElement(QualificationListItemComp, {
      key: idx,
      file: file,
      ref: actionBtnRef.current[idx],
      formattedMetadataQualification: meta,
      toggleActionsMenu: function toggleActionsMenu(val) {
        return _toggleActionsMenu(idx, name, val);
      }
    });
  }), optionFile.name && /*#__PURE__*/React.createElement(ActionMenuWrapper, {
    onClose: hideActionsMenu,
    file: file,
    optionFile: optionFile,
    ref: actionBtnRef.current[optionFile.id]
  })));
};

Qualification.propTypes = {
  file: PropTypes.object.isRequired
};
export default withViewerLocales(Qualification);