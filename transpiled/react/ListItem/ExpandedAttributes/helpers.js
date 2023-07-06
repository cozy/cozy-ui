import get from 'lodash/get';
import { formatDate } from "cozy-ui/transpiled/react/Viewer/helpers";
export var normalizeExpandedAttribute = function normalizeExpandedAttribute(attr) {
  return attr.replaceAll(':', '.').replace('flexsearchProps.', '').replace('translated.', '');
}; // attributes not considered as expanded attributes

export var notExpandedAttributes = {
  'io.cozy.contacts': ['fullname', 'civility', 'note'],
  'io.cozy.files': ['name', 'flexsearchProps:translated:qualificationLabel', 'flexsearchProps:translated:driverLicense', 'flexsearchProps:translated:paymentProofFamilyAllowance', 'flexsearchProps:translated:caf', 'flexsearchProps:translated:vehicleRegistration', 'flexsearchProps:translated:nationalIdCard', 'flexsearchProps:translated:bankDetails', 'flexsearchProps:translated:passport', 'flexsearchProps:translated:residencePermit']
}; // attributes that we want to display if no attribute of the document is related to the search

export var defaultExpandedAttributes = {
  'io.cozy.contacts': ['email', 'phone', 'address', 'birthday'],
  'io.cozy.files': ['metadata.number', 'metadata.cafFileNumber', 'metadata.cardNumber', 'metadata.vinNumber', 'metadata.ibanNumber', 'metadata.passportNumber', 'metadata.noticePeriod', 'metadata.obtentionDate', 'metadata.expirationDate', 'metadata.country', 'metadata.refTaxIncome', 'metadata.contractType']
};
export var hasAllElement = function hasAllElement(arr1, arr2) {
  return arr1 === null || arr1 === void 0 ? void 0 : arr1.every(function (x) {
    return arr2.includes(x);
  });
};
export var makeDefaultExpandedAttributes = function makeDefaultExpandedAttributes(doc, expandedAttributes) {
  var doctype = doc === null || doc === void 0 ? void 0 : doc._type;
  if (!expandedAttributes || !doc || !doctype) return undefined; // checks if there are any expanded attributes.
  // If there are none, the default expanded attributes are returned

  if (hasAllElement(expandedAttributes, notExpandedAttributes[doctype])) {
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
  return function () {
    var _navigator;

    if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setAlertProps({
        open: true,
        severity: 'success',
        message: t("ListItem.snackbar.copyToClipboard.success")
      });
    } else {
      setAlertProps({
        open: true,
        severity: 'error',
        message: t("ListItem.snackbar.copyToClipboard.error")
      });
    }
  };
};
export var isDate = function isDate(value) {
  if (!isNaN(value)) return false;
  var dateTime = new Date(value).getTime();
  var dateParsedValue = Date.parse(value);
  return dateTime === dateParsedValue;
};
export var formatAttrValue = function formatAttrValue(_ref2) {
  var _attrValue$find, _attrValue$find2, _attrValue$find3;

  var attribute = _ref2.attribute,
      attrValue = _ref2.attrValue,
      f = _ref2.f,
      lang = _ref2.lang;
  if (!attrValue || attrValue.length === 0) return undefined;

  switch (true) {
    case isDate(attrValue):
      return formatDate({
        f: f,
        lang: lang,
        date: attrValue
      });

    case attribute === 'email':
      return (_attrValue$find = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find === void 0 ? void 0 : _attrValue$find.address;

    case attribute === 'address':
      return (_attrValue$find2 = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find2 === void 0 ? void 0 : _attrValue$find2.formattedAddress;

    case attribute === 'phone':
      return (_attrValue$find3 = attrValue.find(function (x) {
        return x.primary === true;
      })) === null || _attrValue$find3 === void 0 ? void 0 : _attrValue$find3.number;

    default:
      return attrValue;
  }
};
export var makeAttrKey = function makeAttrKey(doc, expandedAttribute) {
  switch (true) {
    case expandedAttribute === 'metadata.number':
      return "".concat(expandedAttribute, ".").concat(doc.metadata.qualification.label);

    case expandedAttribute.match(/\[.+\]/g) !== null:
      return expandedAttribute.split('[')[0];

    default:
      return expandedAttribute;
  }
};
export var makeAttrsKeyAndFormatedValue = function makeAttrsKeyAndFormatedValue(_ref3) {
  var doc = _ref3.doc,
      expandedAttributes = _ref3.expandedAttributes,
      f = _ref3.f,
      lang = _ref3.lang;
  var attrsKeyAndFormatedValue = expandedAttributes.map(function (expandedAttribute) {
    var attrValue = get(doc, expandedAttribute);
    var attrFormatedValue = formatAttrValue({
      attribute: expandedAttribute,
      attrValue: attrValue,
      f: f,
      lang: lang
    });
    if (!attrFormatedValue) return undefined;
    var attrKey = makeAttrKey(doc, expandedAttribute);
    return {
      attrKey: attrKey,
      attrFormatedValue: attrFormatedValue
    };
  }).filter(function (x) {
    return x;
  }).slice(0, 3);
  return attrsKeyAndFormatedValue;
};
export var hasExpandedAttributesDisplayed = function hasExpandedAttributesDisplayed(_ref4) {
  var doc = _ref4.doc,
      expandedAttributes = _ref4.expandedAttributes,
      f = _ref4.f,
      lang = _ref4.lang;
  var defaultExpandedAttributes = makeDefaultExpandedAttributes(doc, expandedAttributes);
  var attrsKeyAndFormatedValue = makeAttrsKeyAndFormatedValue({
    doc: doc,
    expandedAttributes: defaultExpandedAttributes,
    f: f,
    lang: lang
  });
  return (attrsKeyAndFormatedValue === null || attrsKeyAndFormatedValue === void 0 ? void 0 : attrsKeyAndFormatedValue.length) > 0 || false;
};
export var getValueExtended = function getValueExtended(_ref5) {
  var attrKey = _ref5.attrKey,
      value = _ref5.value,
      t = _ref5.t;

  if (attrKey === 'metadata.noticePeriod') {
    if (!isNaN(parseInt(value))) {
      return t('common.day', {
        smart_count: parseInt(value)
      });
    }
  }

  if (attrKey === 'metadata.refTaxIncome') {
    if (!isNaN(parseInt(value))) {
      return "".concat(value, " \u20AC");
    }
  }

  return value;
};