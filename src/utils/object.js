/**
 * Created by qw4wer on 2016/7/6.
 */

var dom = require('./dom/dom');

/**
 * autor: qw4wer
 * time: 2016/7/6 16:28
 * disc : 复制对象
 */
var copy = function (src, desc, isDeep, isCover) {

    if (typeof src === 'array') {
        desc = desc || [];
        return copyArr(src.desc);
    }

    if (typeof src === 'object' || typeof src === 'function') {
        desc = desc || {};
        if (isCover)
            return copyCover(src, desc);
        return copyObj(src, desc, isCover);
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

    function copyCover(src, desc) {
        src = src || {};
        desc = desc || {};
        for (var key in desc) {
            src[key] = typeof desc[key] === 'object' ? copyObj(desc[key]) : desc[key];
        }
    }
}


var hideProperty = function (obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        writable: true,
        enumerable: false,
        configurable: true
    });
}

module.exports = {
    copy: copy,
    hideProperty: hideProperty,
};

