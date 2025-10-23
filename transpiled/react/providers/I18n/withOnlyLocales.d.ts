export default withOnlyLocales;
/**
 *
 * @param  {Function|Object} localesOrRequire - Either a function returning the locale,
 *                                              or an object containing all the locales
 * @return {Component}
 */
declare function withOnlyLocales(localesOrRequire: Function | Object): Component;
