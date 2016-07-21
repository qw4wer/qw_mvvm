/**
 * Created by qw4wer on 2016/7/6.
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

qvvm.fn = qvvm.prototype = qvvm.init.prototype

qvvm.extend = function (srcObj, extendObj) {
    for (var property in  extendObj) {
        srcObj[property] = extendObj[property];
    }
    return srcObj;
}

qvvm.extend(qvvm, {
    fn: {},
    vmodules: [],
    flag: 'vm-controller',
    arr2Obj: function (arr) {
        var obj = {};
        if (typeof arr != "arr") {
            for (var i = 0, n = arr.length; i < n; i++) {
                obj[arr[i]] = true;
            }
        }
        return obj;
    }


});


module.exports = qvvm;