/*!
 * Cozy-Ui
 * A [Cozy](http://cozy.io/) apps Ui SDK
 *
 * https://github.com/m4dz/cozy-ui
 * AGPL-3.0 Licensed
 */

var path = require('path');

module.exports = exports = function (){
    return function (style){
        style.set('include css', true);
        style.import(path.join(__dirname, '..', 'node_modules', 'normalize.css', 'normalize.css'))
        style.include(__dirname);
    };
};

exports.version = require(path.join(__dirname, '..', 'package.json')).version;
exports.path = __dirname;
