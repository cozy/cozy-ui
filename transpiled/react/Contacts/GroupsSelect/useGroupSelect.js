import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import _regeneratorRuntime from "@babel/runtime/regenerator";
import get from 'lodash/get';
import { useSelectedGroup } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/GroupsSelectProvider";
import { isExistingGroup } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/helpers";
import { locales } from "cozy-ui/transpiled/react/Contacts/GroupsSelect/locales";
import { useAlert } from "cozy-ui/transpiled/react/providers/Alert";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";

var useGroupsSelect = function useGroupsSelect(_ref) {
  var allGroups = _ref.allGroups,
      onGroupCreated = _ref.onGroupCreated,
      client = _ref.client,
      onGroupCreate = _ref.onGroupCreate,
      onGroupUpdate = _ref.onGroupUpdate;

  var _useSelectedGroup = useSelectedGroup(),
      selectedGroup = _useSelectedGroup.selectedGroup,
      setSelectedGroup = _useSelectedGroup.setSelectedGroup;

  var _useAlert = useAlert(),
      showAlert = _useAlert.showAlert;

  useExtendI18n(locales);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var createGroupSelf = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(group) {
      var _yield$onGroupCreate, createdGroup;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (group.name) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!isExistingGroup(allGroups, group)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", showAlert({
                severity: 'error',
                message: t('Contacts.GroupsSelect.already_exists', {
                  name: group.name
                })
              }));

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return onGroupCreate(client, group);

            case 7:
              _yield$onGroupCreate = _context.sent;
              createdGroup = _yield$onGroupCreate.data;

              if (onGroupCreated) {
                onGroupCreated(createdGroup);
              }

              return _context.abrupt("return", showAlert({
                severity: 'success',
                message: t('Contacts.GroupsSelect.created.success')
              }));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              return _context.abrupt("return", showAlert({
                severity: 'error',
                message: t('Contacts.GroupsSelect.created.error')
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 13]]);
    }));

    return function createGroupSelf(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var renameGroupSelf = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(groupId, newName) {
      var group, allOtherGroups, isRenamedGroupSelected, _yield$onGroupUpdate, data;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              group = allGroups.find(function (group) {
                return group.id === groupId;
              });
              allOtherGroups = allGroups.filter(function (group) {
                return group.id !== groupId;
              });
              isRenamedGroupSelected = get(group, '_id') === get(selectedGroup, '_id');

              if (!isExistingGroup(allOtherGroups, {
                name: newName
              })) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", showAlert({
                severity: 'error',
                message: t('Contacts.GroupsSelect.already_exists', {
                  name: newName
                })
              }));

            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return onGroupUpdate(client, _objectSpread(_objectSpread({}, group), {}, {
                name: newName
              }));

            case 8:
              _yield$onGroupUpdate = _context2.sent;
              data = _yield$onGroupUpdate.data;

              if (isRenamedGroupSelected) {
                setSelectedGroup(data);
              }

              return _context2.abrupt("return", showAlert({
                severity: 'success',
                message: t('Contacts.GroupsSelect.renamed.success')
              }));

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](5);
              return _context2.abrupt("return", showAlert({
                severity: 'error',
                message: t('Contacts.GroupsSelect.renamed.error')
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 14]]);
    }));

    return function renameGroupSelf(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    createGroup: createGroupSelf,
    renameGroup: renameGroupSelf
  };
};

export default useGroupsSelect;