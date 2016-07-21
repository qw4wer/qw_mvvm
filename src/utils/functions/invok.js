/**
 * Created by qw4wer on 2016/7/12.
 */


var noop = function () {
};
var invokFn = function (list, fn) {
    fn.apply(noop, list);
}


module.exports = {
    noop: noop,
    invokFn: invokFn
};
