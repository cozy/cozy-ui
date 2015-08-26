var plugin = function (){
    return function (style){
        style.define('split', function (delimiter, node){
            nodename = node.toString().replace(/'/g, '');
            delimiter = delimiter.toString().replace(/'/g, '')
            return nodename.split(delimiter);
        });
    };
};

module.exports = plugin;
