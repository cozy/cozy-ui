import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import Polyglot from 'node-polyglot';
import { useState } from 'react';
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { extend } from "cozy-ui/transpiled/react/providers/I18n/translation";
/**
 * Hook to merge app locales with cozy-ui locales
 * @param {object} locales - Locales sorted by lang `{ fr: {...}, en: {...} }`
 * @returns {void}
 */

var useExtendI18n = function useExtendI18n(locales) {
  var _useI18n = useI18n(),
      lang = _useI18n.lang,
      polyglot = _useI18n.polyglot; // Use to determine if we need to merge locales again, and to avoid useless calls


  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      useExtendI18nLang = _useState2[0],
      setUseExtendI18nLang = _useState2[1];

  if (!locales || !lang || !polyglot) return; // To simplify code we use Polyglot.extend to merge
  // locales from object and from polyglot.phrases
  // rather than native JS or lodash. this is why we have two extend.

  if (useExtendI18nLang !== lang) {
    var _polyglot = new Polyglot({
      phrases: locales[lang],
      locale: lang
    }); // merge locales from app and cozy-ui, without replacing existing one in app


    extend(polyglot.phrases, _polyglot); // use merged locales in app

    extend(_polyglot.phrases, polyglot); // set the switch to avoid useless merge

    setUseExtendI18nLang(lang);
  }
};

export default useExtendI18n;