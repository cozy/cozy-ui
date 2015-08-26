var md5 = require('md5');


var plugin = function (){
    return function (style){
        style.define('checksum', function (node, long){
            nodename = node.toString().replace(/'/g, '');
            hash = md5(nodename)
            if (!long) {
                hash = hash.slice(0, 6)
            }
            return hash
        });
    };
};

module.exports = plugin;
