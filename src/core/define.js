/**
 * autor: qw4wer
 * time: 2016/7/8 17:41
 * disc :
 */

var define = function (definition) {
    var $id = definition.$id;

    if (qvvm.vmodules[$id]) {
        return;
    }

    var vm = qvvm.factory(definition);
    return qvvm.vmodules[$id] = vm;

}

module.exports = {define: define};