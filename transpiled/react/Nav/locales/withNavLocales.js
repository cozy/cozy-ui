var en = {
  navLimiter: {
    showMore: "Show More",
    showLess: "Show Less"
  }
};
var fr = {
  navLimiter: {
    showMore: "Voir plus",
    showLess: "Voir moins"
  }
};
var ru = {
  navLimiter: {
    showMore: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
    showLess: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435"
  }
};
var vi = {
  navLimiter: {
    showMore: "Hi\u1EC7n th\xEAm",
    showLess: "Hi\u1EC7n \xEDt h\u01A1n"
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