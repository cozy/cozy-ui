import React from 'react';
import get from 'lodash/get';
import { useClient } from 'cozy-client';
import { isMobileApp } from 'cozy-device-helper';
import { Dialog } from "cozy-ui/transpiled/react/CozyDialogs";
import Button from "cozy-ui/transpiled/react/deprecated/Button";
import useInstance from "cozy-ui/transpiled/react/helpers/useInstance";
import withLocales from "cozy-ui/transpiled/react/I18n/withLocales";
var en = {
  quotaalert: {
    title: "Your disk space is full :(",
    desc: "Please remove files, empty your trash or increase your disk space before uploading files again.",
    confirm: "OK",
    increase: "Increase your disk space"
  }
};
var fr = {
  quotaalert: {
    title: "Votre espace disque est plein :(",
    desc: "Veuillez supprimer des fichiers, vider votre corbeille ou augmenter votre espace disque avant d'importer de nouveau fichier.",
    confirm: "OK",
    increase: "Augmenter votre espace disque"
  }
};
var locales = {
  en: en,
  fr: fr
};

var buildPremiumLink = function buildPremiumLink(uuid, managerUrl) {
  return "".concat(managerUrl, "/cozy/instances/").concat(uuid, "/premium");
};

var QuotaModalAlert = withLocales(locales)(function (_ref) {
  var t = _ref.t,
      onClose = _ref.onClose,
      instance = _ref.instance;
  var uuid = get(instance, 'instance.data.attributes.uuid');
  var managerUrl = get(instance, 'context.data.attributes.manager_url');
  return /*#__PURE__*/React.createElement(Dialog, {
    open: true,
    title: t('quotaalert.title'),
    content: t('quotaalert.desc'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      theme: "secondary",
      onClick: onClose,
      label: t('quotaalert.confirm')
    }), uuid && managerUrl && /*#__PURE__*/React.createElement(Button, {
      theme: "primary",
      label: t('quotaalert.increase'),
      onClick: function onClick() {
        return window.open(buildPremiumLink(uuid, managerUrl), 'self');
      }
    })),
    onClose: onClose
  });
});

var QuotaAlert = function QuotaAlert(_ref2) {
  var onClose = _ref2.onClose;
  var client = useClient();
  /**
   * We don't want to call useInstance if we are on
   * mobile since we don't want to create a link to the cozy manager
   * because Apple and Google have restricted policy about
   * making a link to an outside purchase.
   *
   * So no call, no instance info, no button
   */

  if (isMobileApp()) {
    return /*#__PURE__*/React.createElement(QuotaModalAlert, {
      onClose: onClose
    });
  } // TODO: why is there a conditional hook here?
  // eslint-disable-next-line react-hooks/rules-of-hooks


  var instanceInfo = useInstance(client);
  return /*#__PURE__*/React.createElement(QuotaModalAlert, {
    instance: instanceInfo,
    onClose: onClose
  });
};

export default QuotaAlert;