/**
 * Created by qw4wer on 2016/7/4.
 */

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

module.exports = qvvm;