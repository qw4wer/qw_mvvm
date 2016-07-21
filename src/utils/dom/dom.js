/**
 * Created by qw4wer on 2016/7/6.
 */
/**
 * 判断是否为dom对象
 * @type {Function}
 */
var isDom = ( typeof HTMLElement === 'object' ) ?
    function (obj) {
        return obj instanceof HTMLElement;
    } :
    function (obj) {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    };


module.exports = {isDom: isDom};