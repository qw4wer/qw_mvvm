/**
 * Created by qw4wer on 2016/7/6.
 */
/**
* autor: qw4wer
* time: 2016/7/6 17:43
* disc : 判断是否为dom对象
*/
var isDom = ( typeof HTMLElement === 'object' ) ?
    function (obj) {
        return obj instanceof HTMLElement;
    } :
    function (obj) {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }

module.exports = {isDom: isDom};