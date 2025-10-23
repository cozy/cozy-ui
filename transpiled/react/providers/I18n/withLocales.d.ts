export default withLocales;
/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale for a lang,
 *                                              or an object containing all the locales
 * @return {Component}
 */
declare function withLocales(localesOrRequire: Function | Object): Component;
