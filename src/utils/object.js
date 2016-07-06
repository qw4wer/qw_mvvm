/**
 * Created by qw4wer on 2016/7/6.
 */

var dom = require('./dom');

/**
 * autor: qw4wer
 * time: 2016/7/6 16:28
 * disc : 复制对象
 */
var copy = function (src, desc, isDeep) {

    if (typeof src === 'array') {
        desc = desc || [];
        return copyArr(src.desc);
    }

    if (typeof src === 'object') {
        desc = desc || {};
        return copyObj(src, desc);
    }
    if (dom.isDom(src)) {
        return dom.cloneNode(isDeep);
    }


    /**
     * autor: qw4wer
     * time: 2016/7/6 16:28
     * disc : 复制数组
     */
    function copyArr(src, desc) {
        src = src || [];
        desc = desc || [];

        return Array.prototype.concat.call(src, desc);
    }

    /**
     * autor: qw4wer
     * time: 2016/7/6 16:27
     * disc : 深复制对象
     */
    function copyObj(src, desc) {
        src = src || {};
        desc = desc || {};
        for (var key in src) {
            desc[key] = typeof src[key] === 'object' ? copyObj(src[key]) : src[key];
        }
        return desc;
    }
}

module.exports = {copy: copy};

