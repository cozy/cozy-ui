import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var _excluded = ["postcode"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import uniqueId from 'lodash/uniqueId';
import { Association } from 'cozy-client';
import { makeDisplayName } from 'cozy-client/dist/models/contact';
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact';
import contactToFormValues from "cozy-ui/transpiled/react/Contacts/AddModal/ContactForm/contactToFormValues";
export var fieldsRequired = ['givenName', 'familyName', 'email[0].email', 'cozy'];
/**
 * Returns errors if all required fields are empty
 * @param {object} values - Fields values
 * @param {func} t - Translation function
 * @returns {object} Errors
 */

export var validateFields = function validateFields(values, t) {
  var errors = {};

  if (fieldsRequired.every(function (field) {
    return !get(values, field);
  })) {
    fieldsRequired.forEach(function (field) {
      errors[field] = t('Contacts.AddModal.ContactForm.fields.required');
    });
  }

  return errors;
};
/**
 * @param {object} [item] - Contact attribute
 * @returns {string} Stringified object
 */

export var makeItemLabel = function makeItemLabel(item) {
  if (!item) return undefined;
  var res = item.label || item.type ? JSON.stringify({
    type: item.type,
    label: item.label
  }) : undefined;
  return res;
};
/**
 *
 * @param {string} [itemLabel] - Value of the label for a contact attribute
 * @returns {{ type?: string, label?: string }}
 */

export var makeTypeAndLabel = function makeTypeAndLabel(itemLabel) {
  if (!itemLabel) {
    return {
      type: undefined,
      label: undefined
    };
  }

  var itemLabelObj = JSON.parse(itemLabel);
  var res = {
    type: itemLabelObj.type,
    label: itemLabelObj.label
  };
  return res;
};
/**
 * @param {object} addressField
 * @returns {boolean} True if addressField has extended address
 */

export var hasExtendedAddress = function hasExtendedAddress(addressField) {
  if (!addressField) return false;
  var extendedAddressKeys = ['addresslocality', 'addressbuilding', 'addressstairs', 'addressfloor', 'addressapartment', 'addressentrycode'];
  return Object.keys(addressField).some(function (ext) {
    return extendedAddressKeys.includes(ext);
  });
};
export var moveToHead = function moveToHead(shouldBeHead) {
  return function (items) {
    return items.reduce(function (arr, v) {
      return shouldBeHead(v) ? [v].concat(_toConsumableArray(arr)) : [].concat(_toConsumableArray(arr), [v]);
    }, []);
  };
};
export var movePrimaryToHead = moveToHead(function (v) {
  return v === null || v === void 0 ? void 0 : v.primary;
});
export var createAddress = function createAddress(_ref) {
  var address = _ref.address,
      oldContact = _ref.oldContact,
      t = _ref.t;
  return address ? address.filter(function (val) {
    return val && val.address;
  }).map(function (addressField, index) {
    var _oldContact$address, _contactToFormValues, _contactToFormValues$;

    var oldContactAddress = oldContact === null || oldContact === void 0 ? void 0 : (_oldContact$address = oldContact.address) === null || _oldContact$address === void 0 ? void 0 : _oldContact$address[index];
    var oldContactFormValues = (_contactToFormValues = contactToFormValues({
      contact: oldContact,
      t: t
    })) === null || _contactToFormValues === void 0 ? void 0 : (_contactToFormValues$ = _contactToFormValues.address) === null || _contactToFormValues$ === void 0 ? void 0 : _contactToFormValues$[index];
    var addressHasBeenModified = !isEqual(addressField, oldContactFormValues);

    if (addressHasBeenModified) {
      // Use "code" instead "postcode", to be vcard 4.0 rfc 6350 compliant
      // eslint-disable-next-line no-unused-vars
      var _ref2 = oldContactAddress || {},
          postcode = _ref2.postcode,
          oldContactAddressCleaned = _objectWithoutProperties(_ref2, _excluded);

      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, oldContactAddressCleaned), {}, {
        formattedAddress: addressField.address,
        number: addressField.addressnumber,
        street: addressField.addressstreet,
        code: addressField.addresscode,
        city: addressField.addresscity,
        region: addressField.addressregion,
        country: addressField.addresscountry
      }, hasExtendedAddress(addressField) && {
        extendedAddress: _objectSpread(_objectSpread({}, oldContactAddressCleaned.extendedAddress), {}, {
          locality: addressField.addresslocality,
          building: addressField.addressbuilding,
          stairs: addressField.addressstairs,
          floor: addressField.addressfloor,
          apartment: addressField.addressapartment,
          entrycode: addressField.addressentrycode
        })
      }), makeTypeAndLabel(addressField.addressLabel)), {}, {
        primary: index === 0
      });
    }

    return oldContactAddress;
  }) : [];
};
/**
 * @param {(import('../types').RelatedContact|undefined)[]} relatedContact - The related contacts array
 * @returns {Record<string, { data: { _id: string, _type: string }[] }>} - The related contacts relationships
 */

export var getRelatedContactRelationships = function getRelatedContactRelationships(relatedContact) {
  // Tips filter Boolean to remove undefined value from array when relatedContact is empty (see contactToFormValues)
  var data = relatedContact.filter(Boolean).reduce(function (acc, curr) {
    var relationType = curr.relatedContactLabel ? JSON.parse(curr.relatedContactLabel).type : 'related';
    var existingIndex = acc.findIndex(function (item) {
      return item._id === curr.relatedContactId;
    });

    if (existingIndex !== -1) {
      acc[existingIndex].metadata.relationTypes = Array.from(new Set([].concat(_toConsumableArray(acc[existingIndex].metadata.relationTypes), [relationType])));
    } else {
      acc.push({
        _id: curr.relatedContactId,
        _type: CONTACTS_DOCTYPE,
        metadata: {
          relationTypes: [relationType]
        }
      });
    }

    return acc;
  }, []); // `data` can be empty, you still have to return an object to override the behavior of the cozy-client store, otherwise it will keep the old value, and without refreshing the page, the data will not be up to date in the store and therefore on the interface

  return {
    related: {
      data: data
    }
  };
};
/**
 * When changing the type of relationship, it must be ensured that no empty relationship remains.
 * The old and new ones are merged into `formValuesToContact`.
 *
 * @param {import('cozy-client/types/types').IOCozyContact} contact - The contact object with all relationships
 * @returns {import('cozy-client/types/types').IOCozyContact} - The contact object without the related contacts relationships
 */

export var removeRelatedContactRelationships = function removeRelatedContactRelationships(contact) {
  if (!(contact !== null && contact !== void 0 && contact.relationships)) return contact;
  var updatedContact = merge({}, contact);
  var relationshipsWithoutRelatedContact = Object.entries(updatedContact.relationships).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        relName = _ref4[0],
        relValue = _ref4[1];

    if ('related' === relName) {
      acc[relName] = relValue;
    }

    return acc;
  }, {});
  updatedContact.relationships = relationshipsWithoutRelatedContact;
  return updatedContact;
}; // TODO : Update dehydrate function to HasMany class in cozy-client

/**
 * This function is used to clean the contact object from the associated data
 * cozy-client dehydrates the document before saving it (via the `HasMany` method), but by doing it manually, we ensure that all hydrated relationships in the document (and without data of course) are not saved in the `relationships` of the document, which adds unnecessary data.
 *
 * @param {import('cozy-client/types/types').IOCozyContact} contact - The contact object with associated data
 * @returns {import('cozy-client/types/types').IOCozyContact} - The contact object without associated data
 */

export var removeAsscociatedData = function removeAsscociatedData(contact) {
  if (!contact) return {};
  return Object.entries(contact).reduce(function (cleanedContact, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    // Add `groups` condition to keep the old implementation functional, see below
    if (!(value instanceof Association) || key === 'groups') {
      cleanedContact[key] = value;
    }

    return cleanedContact;
  }, {});
};
/**
 * @param {import('cozy-client/types/types').IOCozyContact} contact
 * @returns {import('../types').RelatedContact[]}
 */

export var makeRelatedContact = function makeRelatedContact(contact) {
  var _contact$relationship;

  if (!(contact.related instanceof Association) || !((_contact$relationship = contact.relationships) !== null && _contact$relationship !== void 0 && _contact$relationship.related)) {
    return [undefined];
  }

  var relatedData = contact.related.data.reduce(function (acc, curr) {
    // Use `makeDisplayName` because if the contact is newly created, it has no `displayName` attribute. (Creation of a contact when selecting a linked contact)
    acc[curr._id] = curr.displayName || makeDisplayName(curr);
    return acc;
  }, {});
  var res = contact.relationships.related.data.flatMap(function (item) {
    return item.metadata.relationTypes.map(function (type) {
      return {
        relatedContactId: item._id,
        relatedContact: relatedData[item._id],
        relatedContactLabel: makeItemLabel({
          type: type === 'related' ? '' : type
        })
      };
    });
  }); // Useful because a contact always has at least the `related` relationships (see `getRelatedContactRelationships`)

  return res.length > 0 ? res : [undefined];
};
export var addField = function addField(fields) {
  return fields.push({
    fieldId: uniqueId('fieldId_')
  });
};
export var removeField = function removeField(fields, index) {
  var isLastRemainingField = fields.length === 1;

  if (isLastRemainingField) {
    fields.update(index, undefined);
  } else {
    fields.remove(index);
  }
};
/**
 *
 * @param {string} value
 * @param {func} t
 * @returns {string}
 */

export var makeCustomLabel = function makeCustomLabel(value, t) {
  var _JSON$parse = JSON.parse(value),
      type = _JSON$parse.type,
      label = _JSON$parse.label;

  var isSupportedLabel = ['home', 'work'].includes(label);
  var firstString = type || '';
  var secondString = label && isSupportedLabel ? type ? " (".concat(t("Contacts.AddModal.ContactForm.label.".concat(label)), ")").toLowerCase() : "label.".concat(label) : '';
  return firstString + secondString || null;
};
/**
 *
 * @param {import('cozy-client/types/types').IOCozyContact} oldContact - Contact to be modified
 * @param {string?} value - New URI value to add to the Contact
 * @returns {{ uri: string, protocol: string, label: string, primary?: boolean }[]}
 */

export var makeImppValues = function makeImppValues(oldContact, value) {
  var _value = (value === null || value === void 0 ? void 0 : value.trim()) || '';

  var oldImppValues = oldContact === null || oldContact === void 0 ? void 0 : oldContact.impp;

  if (_value) {
    if (!oldImppValues || oldImppValues.length === 0) {
      return [{
        uri: _value,
        protocol: 'matrix',
        label: 'work',
        primary: true
      }];
    }

    return oldImppValues.map(function (el) {
      if (el.protocol === 'matrix' && el.label === 'work') {
        return _objectSpread(_objectSpread({}, el), {}, {
          uri: _value
        });
      }

      return el;
    });
  }

  return (oldImppValues === null || oldImppValues === void 0 ? void 0 : oldImppValues.map(function (el) {
    if (el.protocol !== 'matrix' || el.label !== 'work') {
      return el;
    }
  }).filter(Boolean)) || [];
};
/**
 *
 * @param {string} name
 * @param {string} value
 * @returns {string}
 */

export var makeInitialCustomValue = function makeInitialCustomValue(name, value) {
  // gender input doesn't support custom label
  if (!name || !value || name === 'gender') return undefined;
  var valueObj = JSON.parse(value); // Voluntarily before the "backwards compatibility" condition

  if (name.includes('relatedContactLabel')) {
    if (!'related' === valueObj.type) {
      return JSON.stringify({
        type: valueObj.type
      });
    }

    return undefined;
  } // for backwards compatiblity - historically there is only type and no label


  if (valueObj.type && !valueObj.label) {
    return JSON.stringify({
      type: valueObj.type
    });
  } // for phone label


  if (name.includes('phoneLabel')) {
    // but unsupported one
    if (!['cell', 'voice', 'fax'].includes(valueObj.type)) {
      return JSON.stringify({
        type: valueObj.type,
        label: valueObj.label
      });
    } // we don't want to create a custom label if supported


    return undefined;
  } // at this point if label and type are both present, it's a custom label


  if (valueObj.type && valueObj.label) {
    return JSON.stringify({
      type: valueObj.type,
      label: valueObj.label
    });
  }
};
/**
 * @param {(import('../types').Field)[]|undefined} customFields
 * @param {(import('../types').Field)[]} defaultFields
 * @returns {(import('../types').Field)[]}
 */

export var makeFields = function makeFields(customFields, defaultFields) {
  if (!customFields) {
    return defaultFields;
  }

  var fields = _toConsumableArray(defaultFields);

  customFields.map(function (customField) {
    if (customField.position) {
      fields.splice(customField.position, 0, customField);
    }
  });
  return fields;
};