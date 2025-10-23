import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { updateIndexFullNameAndDisplayName } from 'cozy-client/dist/models/contact';
import { removeAsscociatedData, removeRelatedContactRelationships, createAddress, getRelatedContactRelationships, makeImppValues, makeTypeAndLabel } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";

var formValuesToContact = function formValuesToContact(_ref) {
  var formValues = _ref.formValues,
      oldContact = _ref.oldContact,
      makeCustomFieldsFormValues = _ref.makeCustomFieldsFormValues,
      t = _ref.t;
  var gender = formValues.gender,
      givenName = formValues.givenName,
      additionalName = formValues.additionalName,
      surname = formValues.surname,
      familyName = formValues.familyName,
      phone = formValues.phone,
      email = formValues.email,
      address = formValues.address,
      matrix = formValues.matrix,
      cozy = formValues.cozy,
      company = formValues.company,
      jobTitle = formValues.jobTitle,
      birthday = formValues.birthday,
      birthplace = formValues.birthplace,
      note = formValues.note,
      relatedContact = formValues.relatedContact;
  var relatedContactRelationships = getRelatedContactRelationships(relatedContact);
  var oldContactCleaned = removeRelatedContactRelationships(removeAsscociatedData(oldContact));

  var relationshipsFormValues = _objectSpread(_objectSpread(_objectSpread({}, oldContactCleaned === null || oldContactCleaned === void 0 ? void 0 : oldContactCleaned.relationships), relatedContactRelationships), {}, {
    // If we don't create the relationships field manually, cozy-client doesn't create it automatically when needed (eg. b56ea9dd308c31555aa1433514fa3481adb92f31)
    groups: {
      data: []
    }
  });

  var customFieldsFormValues = (makeCustomFieldsFormValues === null || makeCustomFieldsFormValues === void 0 ? void 0 : makeCustomFieldsFormValues(formValues)) || {};

  var contactWithFormValues = _objectSpread(_objectSpread(_objectSpread({}, oldContactCleaned), customFieldsFormValues), {}, {
    gender: gender || '',
    name: _objectSpread(_objectSpread({}, oldContactCleaned === null || oldContactCleaned === void 0 ? void 0 : oldContactCleaned.name), {}, {
      givenName: givenName || '',
      additionalName: additionalName,
      surname: surname,
      familyName: familyName || ''
    }),
    email: email ? email.filter(function (val) {
      return val && val.email;
    }).map(function (_ref2, index) {
      var email = _ref2.email,
          emailLabel = _ref2.emailLabel;
      return _objectSpread(_objectSpread({
        address: email
      }, makeTypeAndLabel(emailLabel)), {}, {
        primary: index === 0
      });
    }) : [],
    impp: makeImppValues(oldContactCleaned, matrix),
    address: createAddress({
      address: address,
      oldContact: oldContactCleaned,
      t: t
    }),
    phone: phone ? phone.filter(function (val) {
      return val && val.phone;
    }).map(function (_ref3, index) {
      var phone = _ref3.phone,
          phoneLabel = _ref3.phoneLabel;
      return _objectSpread(_objectSpread({
        number: phone
      }, makeTypeAndLabel(phoneLabel)), {}, {
        primary: index === 0
      });
    }) : [],
    cozy: cozy ? [_objectSpread(_objectSpread({
      url: cozy
    }, makeTypeAndLabel(formValues['cozyLabel'])), {}, {
      primary: true
    })] : [],
    company: company || '',
    jobTitle: jobTitle || '',
    birthday: birthday || '',
    birthplace: birthplace || '',
    note: note || '',
    relationships: relationshipsFormValues,
    metadata: _objectSpread(_objectSpread({}, oldContactCleaned === null || oldContactCleaned === void 0 ? void 0 : oldContactCleaned.metadata), {}, {
      version: 1,
      cozy: true
    })
  });

  return updateIndexFullNameAndDisplayName(contactWithFormValues);
};

export default formValuesToContact;