var en = {
  selected: "%{smart_count} item selected |||| %{smart_count} items selected",
  selected_light: "%{smart_count} item |||| %{smart_count} items"
};
var fr = {
  selected: "%{smart_count} \xE9l\xE9ment s\xE9lectionn\xE9 |||| %{smart_count} \xE9l\xE9ments s\xE9lectionn\xE9s",
  selected_light: "%{smart_count} \xE9l\xE9ment |||| %{smart_count} \xE9l\xE9ments"
};
var ru = {
  selected: "%{smart_count} \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u044B\u0431\u0440\u0430\u043D |||| %{smart_count} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
  selected_light: "%{smart_count} \u044D\u043B\u0435\u043C\u0435\u043D\u0442 |||| %{smart_count} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
};
var vi = {
  selected: "%{smart_count} m\u1EE5c \u0111\u01B0\u1EE3c ch\u1ECDn |||| %{smart_count} m\u1EE5c \u0111\u01B0\u1EE3c ch\u1ECDn",
  selected_light: "%{smart_count} m\u1EE5c |||| %{smart_count} m\u1EE5c"
};
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withOnlyLocales(locales);