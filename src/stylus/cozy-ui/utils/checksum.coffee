md5 = require 'md5'


module.exports = plugin = ->
    (style) ->
        style.define 'checksum', (node, long = false) ->
            nodename = node.toString().replace /'/g, ''
            hash     = md5 nodename
            hash     = hash.slice 0, 6 unless long
