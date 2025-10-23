var en = {
  cancel: "Cancel",
  clear: "Clear",
  invalidDate: "Invalid date",
  ok: "Ok",
  today: "Today",
  minDateLabelError: "Date should not be before minimal date (%{date})"
};
var fr = {
  cancel: "Annuler",
  clear: "Supprimer",
  invalidDate: "Date invalide",
  ok: "Ok",
  today: "Aujourd'hui",
  minDateLabelError: "La date ne doit pas \xEAtre ant\xE9rieure \xE0 la date minimale (%{date})"
};
var ru = {
  cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
  invalidDate: "\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0434\u0430\u0442\u0430",
  ok: "\u041E\u041A",
  today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
  minDateLabelError: "\u0414\u0430\u0442\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0430\u0442\u044B (%{date})"
};
var vi = {
  cancel: "H\u1EE7y",
  clear: "X\xF3a",
  invalidDate: "Ng\xE0y kh\xF4ng h\u1EE3p l\u1EC7",
  ok: "Ok",
  today: "H\xF4m nay",
  minDateLabelError: "Ng\xE0y kh\xF4ng \u0111\u01B0\u1EE3c tr\u01B0\u1EDBc ng\xE0y t\u1ED1i thi\u1EC3u (%{date})"
};
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withOnlyLocales(locales);