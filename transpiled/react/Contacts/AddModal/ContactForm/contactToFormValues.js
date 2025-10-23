import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import uniqueId from 'lodash/uniqueId';
import { getFormattedAddress } from 'cozy-client/dist/models/contact';
import { fields } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/fieldsConfig";
import { makeItemLabel, makeRelatedContact, movePrimaryToHead } from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/helpers";

var contactToFormValues = function contactToFormValues(_ref) {
  var contact = _ref.contact,
      makeCustomContactValues = _ref.makeCustomContactValues,
      t = _ref.t;
  // initialize the form values, required so that array fields start with at least one editable field
  var initialFieldValues = fields.reduce(function (initialValues, _ref2) {
    var name = _ref2.name,
        layout = _ref2.layout;
    initialValues[name] = layout === 'array' ? [undefined] : undefined;
    return initialValues;
  }, {});

  if (contact) {
    var _impp$find;

    var gender = contact.gender,
        address = contact.address,
        birthday = contact.birthday,
        birthplace = contact.birthplace,
        company = contact.company,
        jobTitle = contact.jobTitle,
        cozy = contact.cozy,
        email = contact.email,
        impp = contact.impp,
        name = contact.name,
        note = contact.note,
        phone = contact.phone;
    var addressValue = address && address.length > 0 ? movePrimaryToHead(address).map(function (addressInfo) {
      var _addressInfo$extended, _addressInfo$extended2, _addressInfo$extended3, _addressInfo$extended4, _addressInfo$extended5, _addressInfo$extended6;

      return {
        fieldId: uniqueId('fieldId_'),
        address: getFormattedAddress(addressInfo, t),
        addressnumber: addressInfo.number,
        addressstreet: addressInfo.street || getFormattedAddress(addressInfo, t),
        addresscode: addressInfo.postcode || addressInfo.code,
        addresscity: addressInfo.city,
        addressregion: addressInfo.region,
        addresscountry: addressInfo.country,
        addresslocality: (_addressInfo$extended = addressInfo.extendedAddress) === null || _addressInfo$extended === void 0 ? void 0 : _addressInfo$extended.locality,
        addressbuilding: (_addressInfo$extended2 = addressInfo.extendedAddress) === null || _addressInfo$extended2 === void 0 ? void 0 : _addressInfo$extended2.building,
        addressstairs: (_addressInfo$extended3 = addressInfo.extendedAddress) === null || _addressInfo$extended3 === void 0 ? void 0 : _addressInfo$extended3.stairs,
        addressfloor: (_addressInfo$extended4 = addressInfo.extendedAddress) === null || _addressInfo$extended4 === void 0 ? void 0 : _addressInfo$extended4.floor,
        addressapartment: (_addressInfo$extended5 = addressInfo.extendedAddress) === null || _addressInfo$extended5 === void 0 ? void 0 : _addressInfo$extended5.apartment,
        addressentrycode: (_addressInfo$extended6 = addressInfo.extendedAddress) === null || _addressInfo$extended6 === void 0 ? void 0 : _addressInfo$extended6.entrycode,
        addressLabel: makeItemLabel(addressInfo)
      };
    }) : [undefined];
    var cozyValue = cozy && cozy.length > 0 ? cozy[0].url : undefined;
    var cozyLabel = cozy && cozy.length > 0 ? makeItemLabel(cozy[0]) : undefined;
    var emailValue = email && email.length > 0 ? movePrimaryToHead(email).map(function (item) {
      return {
        fieldId: uniqueId('fieldId_'),
        email: item === null || item === void 0 ? void 0 : item.address,
        emailLabel: makeItemLabel(item)
      };
    }) : [undefined];
    var matrixValue = impp && impp.length > 0 ? ((_impp$find = impp.find(function (item) {
      return item.label === 'work' && item.protocol === 'matrix';
    })) === null || _impp$find === void 0 ? void 0 : _impp$find.uri) || undefined : undefined;
    var phoneValue = phone && phone.length > 0 ? movePrimaryToHead(phone).map(function (item) {
      return {
        fieldId: uniqueId('fieldId_'),
        phone: item === null || item === void 0 ? void 0 : item.number,
        phoneLabel: makeItemLabel(item)
      };
    }) : [undefined];
    var relatedContactValue = makeRelatedContact(contact);
    var customValues = (makeCustomContactValues === null || makeCustomContactValues === void 0 ? void 0 : makeCustomContactValues(contact)) || {};
    return _objectSpread(_objectSpread({}, customValues), {}, {
      gender: gender,
      givenName: name === null || name === void 0 ? void 0 : name.givenName,
      additionalName: name === null || name === void 0 ? void 0 : name.additionalName,
      surname: name === null || name === void 0 ? void 0 : name.surname,
      familyName: name === null || name === void 0 ? void 0 : name.familyName,
      phone: phoneValue,
      email: emailValue,
      matrix: matrixValue,
      address: addressValue,
      cozy: cozyValue,
      cozyLabel: cozyLabel,
      company: company,
      jobTitle: jobTitle,
      birthday: birthday,
      birthplace: birthplace,
      note: note,
      relatedContact: relatedContactValue
    });
  }

  return initialFieldValues;
};

export default contactToFormValues;