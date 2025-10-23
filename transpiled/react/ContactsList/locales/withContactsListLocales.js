var en = {
  empty: "EMPTY",
  me: "me",
  favorite: "favorites"
};
var fr = {
  empty: "VIDE",
  me: "moi",
  favorite: "favoris"
};
var ru = {
  empty: "\u041F\u0423\u0421\u0422\u041E",
  me: "\u044F",
  favorite: "\u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
};
var vi = {
  empty: "TR\u1ED0NG",
  me: "t\xF4i",
  favorite: "y\xEAu th\xEDch"
};
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withOnlyLocales(locales);