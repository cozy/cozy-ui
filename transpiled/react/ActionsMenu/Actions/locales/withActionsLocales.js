var en = {
  viewInContacts: "View in Cozy Contacts",
  modify: "Modify",
  emailTo: "Send an email",
  smsTo: "Send a message",
  print: "Print",
  others: "Others",
  call: "Call"
};
var fr = {
  viewInContacts: "Voir dans Cozy Contacts",
  modify: "Modifier",
  emailTo: "Envoyer un e-mail",
  smsTo: "Envoyer un message",
  print: "Imprimer",
  others: "Autres",
  call: "Appeler"
};
import { getI18n } from "cozy-ui/transpiled/react/providers/I18n/helpers";
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
export var locales = {
  en: en,
  fr: fr
};
export var getActionsI18n = function getActionsI18n() {
  return getI18n(undefined, function (lang) {
    return locales[lang];
  });
};
export default withOnlyLocales(locales);