import _extends from "@babel/runtime/helpers/extends";
import PropTypes from 'prop-types';
import React from 'react';
import EditGroupName from "cozy-ui/transpiled/react/Contacts/GroupsSelect/SelectBox/EditGroupName";
import { ActionsOption, Option as DefaultOption } from "cozy-ui/transpiled/react/SelectBox";

var Option = function Option(props) {
  var _props$data = props.data,
      groupName = _props$data.name,
      groupId = _props$data.id,
      withNoAction = _props$data.withNoAction;
  var _props$selectProps = props.selectProps,
      editedGroupId = _props$selectProps.editedGroupId,
      setEditedGroupId = _props$selectProps.setEditedGroupId,
      deleteGroup = _props$selectProps.deleteGroup,
      renameGroup = _props$selectProps.renameGroup,
      withCheckbox = _props$selectProps.withCheckbox;

  if (editedGroupId === groupId) {
    return /*#__PURE__*/React.createElement(EditGroupName, {
      groupId: groupId,
      groupName: groupName,
      setEditedGroupId: setEditedGroupId,
      renameGroup: renameGroup
    });
  }

  if (withNoAction) {
    return /*#__PURE__*/React.createElement(DefaultOption, props);
  }

  return /*#__PURE__*/React.createElement(ActionsOption, _extends({}, props, {
    withCheckbox: withCheckbox,
    actions: [{
      icon: 'pen',
      onClick: function onClick(_ref) {
        var data = _ref.data;
        return setEditedGroupId(data.id);
      },
      iconProps: {
        'data-testid': "ActionsOption_".concat(props.children, "-icon_pen")
      }
    }, {
      icon: 'trash',
      onClick: function onClick(_ref2) {
        var data = _ref2.data;
        return deleteGroup(data);
      }
    }]
  }));
};

Option.propTypes = {
  selectProps: PropTypes.shape({
    editedGroupId: PropTypes.string.isRequired,
    deleteGroup: PropTypes.func.isRequired,
    setEditedGroupId: PropTypes.func.isRequired,
    withCheckbox: PropTypes.bool
  }),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    withNoAction: PropTypes.bool
  })
};
export default Option;