import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useRef, useState, createRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isExpiringSoon } from 'cozy-client/dist/models/paper';
import List from "cozy-ui/transpiled/react/List";
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import { formatMetadataQualification, knownDateMetadataNames, knownInformationMetadataNames, knownOtherMetadataNames } from "cozy-ui/transpiled/react/Viewer/helpers";
import ExpirationAlert from "cozy-ui/transpiled/react/Viewer/components/ExpirationAlert";
import QualificationListItemContact from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemContact";
import ActionMenuWrapper from "cozy-ui/transpiled/react/Viewer/Panel/ActionMenuWrapper";
import QualificationListItemDate from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemDate";
import QualificationListItemInformation from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemInformation";
import QualificationListItemOther from "cozy-ui/transpiled/react/Viewer/Panel/QualificationListItemOther";

var makeQualificationListItemComp = function makeQualificationListItemComp(metadataName) {
  if (knownDateMetadataNames.includes(metadataName)) {
    return QualificationListItemDate;
  }

  if (knownInformationMetadataNames.includes(metadataName)) {
    return QualificationListItemInformation;
  }

  if (knownOtherMetadataNames.includes(metadataName)) {
    if (metadataName === 'contact') {
      return QualificationListItemContact;
    }

    return QualificationListItemOther;
  }
};

var isExpirationAlertHidden = function isExpirationAlertHidden(file) {
  var _file$metadata$hideEx, _file$metadata;

  return (_file$metadata$hideEx = file === null || file === void 0 ? void 0 : (_file$metadata = file.metadata) === null || _file$metadata === void 0 ? void 0 : _file$metadata.hideExpirationAlert) !== null && _file$metadata$hideEx !== void 0 ? _file$metadata$hideEx : false;
};

var Qualification = function Qualification(_ref) {
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

  var formatedMetadataQualification = useMemo(function () {
    return formatMetadataQualification(metadata);
  }, [metadata]);
  useEffect(function () {
    actionBtnRef.current = formatedMetadataQualification.map(function (_, idx) {
      var _actionBtnRef$current;

      return (_actionBtnRef$current = actionBtnRef.current[idx]) !== null && _actionBtnRef$current !== void 0 ? _actionBtnRef$current : /*#__PURE__*/createRef();
    });
  }, [formatedMetadataQualification]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isExpiringSoon(file) && !isExpirationAlertHidden(file) && /*#__PURE__*/React.createElement(ExpirationAlert, {
    file: file
  }), /*#__PURE__*/React.createElement(List, {
    className: 'u-pv-1'
  }, formatedMetadataQualification.map(function (meta, idx) {
    var name = meta.name;
    var QualificationListItemComp = makeQualificationListItemComp(name);
    return /*#__PURE__*/React.createElement(QualificationListItemComp, {
      key: idx,
      file: file,
      ref: actionBtnRef.current[idx],
      formatedMetadataQualification: meta,
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