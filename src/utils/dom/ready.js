/**
 * autor: qw4wer
 * time: 2016/7/13 10:38
 * disc :
 */

var readyFnList = [], isReady;

/**
 * 执行加载函数
 * @param fn
 */
var performReadyFn = function (fn) {
    isReady = true;
    while (fn = readyFnList.shift()) {
        fn(qvvm);
    }
}
/**
 * 加载成功后方法
 * @param fn
 */
var ready = function (fn) {
    if (!isReady) {
        readyFnList.push(fn)
    } else {
        fn(qvvm);
    }

}

function bind() {
    if (document.readyState === 'complete') {
        setTimeout(performReadyFn, 1);
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', performReadyFn);
    }
}


module.exports = {
    bind: (function () {
        bind();
        return bind()
    })(),
    ready: ready
}