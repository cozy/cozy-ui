var en = {
  viewInContacts: "View in Cozy Contacts",
  modify: "Modify",
  emailTo: "Send an email",
  smsTo: "Send a message",
  print: "Print",
  call: "Call"
};
var fr = {
  viewInContacts: "Voir dans Cozy Contacts",
  modify: "Modifier",
  emailTo: "Envoyer un e-mail",
  smsTo: "Envoyer un message",
  print: "Imprimer",
  call: "Appeler"
};
var ru = {
  viewInContacts: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432 Cozy \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
  modify: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
  emailTo: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C email",
  smsTo: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
  print: "\u041F\u0435\u0447\u0430\u0442\u044C",
  call: "\u0417\u0432\u043E\u043D\u0438\u0442\u044C"
};
var vi = {
  viewInContacts: "Xem trong Cozy Contacts",
  modify: "Ch\u1EC9nh s\u1EEDa",
  emailTo: "G\u1EEDi email",
  smsTo: "G\u1EEDi tin nh\u1EAFn",
  print: "In",
  call: "G\u1ECDi"
};
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withLocales(locales);