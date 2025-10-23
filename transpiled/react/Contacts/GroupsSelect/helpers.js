import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export var isExistingGroup = function isExistingGroup(groupsAlreadyCreated, groupToCreate) {
  var isNameAlreadyUsed = groupsAlreadyCreated.find(function (group) {
    return group.name.toLowerCase() === groupToCreate.name.toLowerCase();
  }) !== undefined;
  return isNameAlreadyUsed;
};
/**
 * Returns the group defined as default in the group filter
 */

export var defaultSelectedGroup = {
  name: 'Contacts.GroupsSelect.filter.all-groups',
  withNoAction: true
};
/**
 * Returns the translated group defined as default in the group filter
 * @param {function} t - Translate
 */

export var translatedDefaultSelectedGroup = function translatedDefaultSelectedGroup(t) {
  return _objectSpread(_objectSpread({}, defaultSelectedGroup), {}, {
    name: t(defaultSelectedGroup.name)
  });
};