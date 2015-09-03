module.exports = plugin = ->
    (style) ->
        style.define 'split', (delimiter, node) ->
            nodename  = node.toString().replace /'/g, ''
            delimiter = delimiter.toString().replace /'/g, ''
            nodename.split delimiter
