/**
 * Created by qw4wer on 2016/7/6.
 */

var object = require('../utils/object');


function qvvm(el) {
    return new qvvm.init(el);
}

global.qvvm = qvvm;
if (typeof window !== 'undefined') {
    window.qvvm = qvvm;
}

qvvm.init = function (el) {
    this[0] = this.element = el;
}

qvvm.fn = qvvm.prototype = qvvm.init.prototype

object.copy(qvvm, {
    fn: {},
    vmodules: [],
    flag: 'vm-controller'


}, false, true);


module.exports = qvvm;