import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import get from 'lodash/get';
import { getTranslatedNameForInformationMetadata, KNOWN_INFORMATION_METADATA_NAMES, KNOWN_DATE_METADATA_NAMES, formatInformationMetadataValue, formatDateMetadataValue } from 'cozy-client/dist/models/paper';
export var normalizeExpandedAttribute = function normalizeExpandedAttribute(attr) {
  return attr.replaceAll(':', '.').replace('flexsearchProps.', '').replace('translated.', '');
}; // attributes not considered as specific expanded attributes
// and then fallback to default expanded attributes

export var notExpandedAttributes = {
  'io.cozy.contacts': ['fullname', 'civility', 'note'],
  'io.cozy.files': [].concat(_toConsumableArray(KNOWN_DATE_METADATA_NAMES.map(function (x) {
    return "metadata.".concat(x);
  })), ['metadata.noticePeriod', 'name', 'flexsearchProps:translated:qualificationLabel', 'flexsearchProps:translated:driverLicense', 'flexsearchProps:translated:paymentProofFamilyAllowance', 'flexsearchProps:translated:caf', 'flexsearchProps:translated:vehicleRegistration', 'flexsearchProps:translated:nationalIdCard', 'flexsearchProps:translated:bankDetails', 'flexsearchProps:translated:paySheet', 'flexsearchProps:translated:passport', 'flexsearchProps:translated:residencePermit'])
}; // attributes that we want to display if no attribute of the document is related to the search

export var defaultExpandedAttributes = {
  'io.cozy.contacts': ['email', 'phone', 'address', 'birthday'],
  'io.cozy.files': [].concat(_toConsumableArray(KNOWN_INFORMATION_METADATA_NAMES.map(function (x) {
    return "metadata.".concat(x);
  })), _toConsumableArray(KNOWN_DATE_METADATA_NAMES.map(function (x) {
    return "metadata.".concat(x);
  }))).filter(function (x) {
    return !notExpandedAttributes['io.cozy.files'].includes(x);
  })
};
export var hasAllElement = function hasAllElement(arr1, arr2) {
  return arr1 === null || arr1 === void 0 ? void 0 : arr1.every(function (x) {
    return arr2.includes(x);
  });
};
export var makeDefaultExpandedAttributes = function makeDefaultExpandedAttributes(doc, expandedAttributes) {
  var doctype = doc === null || doc === void 0 ? void 0 : doc._type;
  if (!doc || !doctype) return undefined; // checks if there are any expanded attributes.
  // If there are none, the default expanded attributes are returned

  if (!expandedAttributes || hasAllElement(expandedAttributes, notExpandedAttributes[doctype])) {
    return defaultExpandedAttributes[doctype];
  }

  return expandedAttributes.map(function (expandedAttribute) {
    return notExpandedAttributes[doctype].includes(expandedAttribute) ? undefined : normalizeExpandedAttribute(expandedAttribute);
  }).filter(function (x) {
    return x;
  });
};
export var copyToClipboard = function copyToClipboard(_ref) {
  var value = _ref.value,
      setAlertProps = _ref.setAlertProps,
      t = _ref.t;
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return navigator.clipboard.writeText(value);

          case 3:
            setAlertProps({
              open: true,
              severity: 'success',
              message: t("ListItem.snackbar.copyToClipboard.success")
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            setAlertProps({
              open: true,
              severity: 'error',
              message: t("ListItem.snackbar.copyToClipboard.error")
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
};
export var isDate = function isDate(value) {
  if (!isNaN(value)) return false;
  var dateTime = new Date(value).getTime();
  var dateParsedValue = Date.parse(value);
  return dateTime === dateParsedValue;
};
export var getAttrValue = function getAttrValue(doc, attrName) {
  var _attrValue$find, _attrValue$find2, _attrValue$find3;

  var attrValue = get(doc, attrName);
  if (!attrValue || attrValue.length === 0) return undefined;

  switch (true) {
    case attrName === 'email':
      return (_attrValue$find = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find === void 0 ? void 0 : _attrValue$find.address;

    case attrName === 'address':
      return (_attrValue$find2 = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find2 === void 0 ? void 0 : _attrValue$find2.formattedAddress;

    case attrName === 'phone':
      return (_attrValue$find3 = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find3 === void 0 ? void 0 : _attrValue$find3.number;

    default:
      return attrValue;
  }
};
export var makeAttrsValues = function makeAttrsValues(doc, expandedAttributes) {
  var attrsValues = expandedAttributes.map(function (attrName) {
    var attrValue = getAttrValue(doc, attrName);
    if (!attrValue) return undefined;
    return {
      attrName: attrName,
      attrValue: attrValue
    };
  }).filter(function (x) {
    return x;
  }).slice(0, 3);
  return attrsValues;
}; // could be use in apps

export var hasExpandedAttributesDisplayed = function hasExpandedAttributesDisplayed(_ref3) {
  var doc = _ref3.doc,
      expandedAttributes = _ref3.expandedAttributes;
  var defaultExpandedAttributes = makeDefaultExpandedAttributes(doc, expandedAttributes);
  var attrsValues = makeAttrsValues(doc, defaultExpandedAttributes);
  return (attrsValues === null || attrsValues === void 0 ? void 0 : attrsValues.length) > 0 || false;
};
export var getFormattedValue = function getFormattedValue(_ref4) {
  var attrName = _ref4.attrName,
      attrValue = _ref4.attrValue,
      qualificationLabel = _ref4.qualificationLabel,
      f = _ref4.f,
      lang = _ref4.lang;

  if (isDate(attrValue)) {
    return formatDateMetadataValue(attrValue, {
      f: f,
      lang: lang
    });
  }

  if (qualificationLabel) {
    return formatInformationMetadataValue(attrValue, {
      lang: lang,
      name: attrName.split('metadata.')[1],
      qualificationLabel: qualificationLabel
    });
  }

  return attrValue;
};
export var makeLabel = function makeLabel(_ref5) {
  var attrName = _ref5.attrName,
      qualificationLabel = _ref5.qualificationLabel,
      t = _ref5.t,
      lang = _ref5.lang;

  if (qualificationLabel) {
    var name = attrName.split('metadata.')[1];
    var label = getTranslatedNameForInformationMetadata(name, {
      lang: lang,
      qualificationLabel: qualificationLabel
    });
    return label;
  }

  return t("ListItem.attributes.".concat(attrName));
};
export var makeAttrsLabelAndFormattedValue = function makeAttrsLabelAndFormattedValue(_ref6) {
  var doc = _ref6.doc,
      expandedAttributes = _ref6.expandedAttributes,
      t = _ref6.t,
      f = _ref6.f,
      lang = _ref6.lang;
  var attrsKeyAndFormattedValue = makeAttrsValues(doc, expandedAttributes);
  return attrsKeyAndFormattedValue.map(function (_ref7) {
    var _doc$metadata, _doc$metadata$qualifi;

    var attrName = _ref7.attrName,
        attrValue = _ref7.attrValue;

    var _attrName = attrName.match(/\[.+\]/g) !== null ? attrName.split('[')[0] : attrName;

    var qualificationLabel = (_doc$metadata = doc.metadata) === null || _doc$metadata === void 0 ? void 0 : (_doc$metadata$qualifi = _doc$metadata.qualification) === null || _doc$metadata$qualifi === void 0 ? void 0 : _doc$metadata$qualifi.label;
    var label = makeLabel({
      attrName: _attrName,
      qualificationLabel: qualificationLabel,
      t: t,
      lang: lang
    });
    var value = getFormattedValue({
      attrName: _attrName,
      attrValue: attrValue,
      qualificationLabel: qualificationLabel,
      f: f,
      lang: lang
    });
    return {
      label: label,
      value: value
    };
  });
};