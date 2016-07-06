/**
 * Created by qw4wer on 2016/7/4.
 */
/**
 * autor: qw4wer
 * time: 2016/7/6 11:41
 * disc : 观测者
 */
function Observer() {
}

/**
 * autor: qw4wer
 * time: 2016/7/6 11:37
 * disc : 生成访问器
 */
function makeAccessor() {
    var old = NaN;

    return {
        get: function () {
            return old;
        },
        set: function (val) {
            if (val === old) {
                return;
            }
            old = val;

        },
        enumerable: true,
        configurable: true
    }
}
/**
 * autor: qw4wer
 * time: 2016/7/6 11:33
 * disc : 工厂方法
 */
function factory(definition) {
    var key, accesses = [];
    for (key in definition) {
        accesses[key] = makeAccessor();
    }
    var $vmodel = new Observer();

    Object.defineProperties($vmodel, accesses);

    for(key in definition){
        $vmodel[key]=definition[key];
    }

    return $vmodel;
}
module.exports = {
    makeAccessor: makeAccessor,
    factory: factory
};