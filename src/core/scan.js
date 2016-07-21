var processors = require('./processor/processors');

/**
 * autor: qw4wer
 * time: 2016/7/8 17:43
 * disc : 扫描并初始化
 */
var scan = function (nodes) {

    for (var i = 0, e; e = nodes[i++];) {
        if (e.nodeType === 1) {
            var id = e.getAttribute(qvvm.flag);
            var vm = qvvm.vmodules[id];
            if (vm) {
                vm.$dom = e;
                var h = handel(vm,e);

            } else if (!$id) {
                scan(e.childNodes);
            }
        }
    }

}

function handel(vm, dom) {
    var attrs = dom.attributes, value, name,k;
    for (var i = 0, length = attrs.length; i < length; i++) {
        if (processors.origin[name = attrs[i].name]) {
            value = attrs[i].value;

            k = qvvm.matchFirst(qvvm.config.rexpr)(value);

            vm.$accesses[k].get.depend.push(processors.processor(name));

            vm.$accesses[k].get.depend.dom = dom;
        }
    }
}


module.exports = {
    scan: function (a) {
        if (!a || !a.nodeType)
            return;
        return scan([a]);
    }
};


