import { divider, emailTo, smsTo, call } from "cozy-ui/transpiled/react/ActionsMenu/Actions";
export var makeOptionalActions = function makeOptionalActions(contact) {
  var _contact$phone, _contact$email;

  var hasPhoneAction = ((_contact$phone = contact.phone) === null || _contact$phone === void 0 ? void 0 : _contact$phone.length) > 0;
  var hasEmailAction = ((_contact$email = contact.email) === null || _contact$email === void 0 ? void 0 : _contact$email.length) > 0;
  var hasMessageActions = hasPhoneAction || hasEmailAction;
  var actionsAndOptions = [{
    action: divider,
    condition: hasMessageActions
  }, {
    action: call,
    condition: hasPhoneAction
  }, {
    action: smsTo,
    condition: hasPhoneAction
  }, {
    action: emailTo,
    condition: hasEmailAction
  }];
  var filteredOptionalActions = actionsAndOptions.reduce(function (acc, curr) {
    if (curr.condition) {
      acc.push(curr.action);
    }

    return acc;
  }, []);
  return filteredOptionalActions;
};