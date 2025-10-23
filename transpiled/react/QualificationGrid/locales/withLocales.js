var en = {
  themes: {
    activity: "Activity",
    family: "Family",
    finance: "Finance",
    health: "Health",
    home: "Home",
    identity: "Identity",
    invoice: "Invoice",
    others: "Others",
    transport: "Transport",
    undefined: "Undefined",
    work_study: "Work"
  }
};
var fr = {
  themes: {
    activity: "Loisirs",
    family: "Famille",
    finance: "Finances",
    health: "Sant\xE9",
    home: "Logement",
    identity: "Identit\xE9",
    invoice: "Factures",
    others: "Autres",
    transport: "Transport",
    undefined: "Ind\xE9fini",
    work_study: "Travail"
  }
};
var ru = {
  themes: {
    activity: "\u0414\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    family: "\u0421\u0435\u043C\u044C\u044F",
    finance: "\u0424\u0438\u043D\u0430\u043D\u0441\u044B",
    health: "\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",
    home: "\u0414\u043E\u043C",
    identity: "\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u044C",
    invoice: "\u0421\u0447\u0435\u0442",
    others: "\u041F\u0440\u043E\u0447\u0435\u0435",
    transport: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
    undefined: "\u041D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043E",
    work_study: "\u0420\u0430\u0431\u043E\u0442\u0430"
  }
};
var vi = {
  themes: {
    activity: "Ho\u1EA1t \u0111\u1ED9ng",
    family: "Gia \u0111\xECnh",
    finance: "T\xE0i ch\xEDnh",
    health: "S\u1EE9c kh\u1ECFe",
    home: "Nh\xE0",
    identity: "Danh t\xEDnh",
    invoice: "H\xF3a \u0111\u01A1n",
    others: "Kh\xE1c",
    transport: "Giao th\xF4ng",
    undefined: "Ch\u01B0a x\xE1c \u0111\u1ECBnh",
    work_study: "C\xF4ng vi\u1EC7c"
  }
};
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withOnlyLocales(locales);