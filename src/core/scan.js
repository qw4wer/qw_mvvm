/**
 * Created by qw4wer on 2016/7/8.
 */
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
                vm.$e = e;

            } else if (!$id) {
                scan(e.childNodes);
            }
        }
    }

}


module.exports = {
    sacn: function (a) {
        if (!a || !a.nodeType)
            return;
        return scan([a]);
    }
};


