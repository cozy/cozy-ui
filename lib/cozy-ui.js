/*!
* Cozy-Ui
* A [Cozy](http://cozy.io/) apps Ui SDK
*
* https://github.com/m4dz/cozy-ui
* MIT Licensed
*/

var path = require( "path" );

module.exports = exports = function (){
    return function (style){
        style.include(__dirname);
    };
};

exports.version = require( path.join( __dirname, "../package.json" ) ).version;
exports.path = __dirname;
