import { within } from '@testing-library/react';
export var getAllDialogs = function getAllDialogs(root) {
  return root.getAllByRole('dialog');
};
export var getDialog = function getDialog(root) {
  var dialogs = getAllDialogs(root);

  if (dialogs.length === 0) {
    root.debug();
    throw new Error('No dialog found');
  } else if (dialogs.length > 1) {
    root.debug();
    throw new Error('Several dialogs found, please use getAllDialogs');
  } else {
    return dialogs[0];
  }
};
export var getCloseButton = function getCloseButton(dialogRoot) {
  var buttons = within(dialogRoot).getAllByRole('button');
  return buttons.find(function (x) {
    return x.dataset.testid && x.dataset.testid.includes('modal-close-button');
  });
};
export var getBackButton = function getBackButton(dialogRoot) {
  var buttons = within(dialogRoot).getAllByRole('button');
  return buttons.find(function (x) {
    return x.dataset.testid && x.dataset.testid.includes('modal-back-button');
  });
};
export var getBackCloseButton = function getBackCloseButton(dialogRoot) {
  var buttons = within(dialogRoot).getAllByRole('button');
  return buttons.find(function (x) {
    return x.dataset.testid && x.dataset.testid.includes('modal-backclose-button');
  });
};