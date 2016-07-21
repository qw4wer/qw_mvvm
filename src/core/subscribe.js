/**
 * 跳过的属性
 * @type {*[]}
 */
var skipAttribute = [
    '$id'
];

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
function makeAccessor(depend) {
    var old = NaN;

    var accessor = {
        get: function () {
            return old;
        },
        set: function (val) {
            if (val === old) {
                return;
            }

            for(var i= 0,length=depend.length;i<length;i++){
                depend[i].apply("",[depend.dom,val]);
            }
            old = val;

        },
        enumerable: true,
        configurable: true
    };

    Object.defineProperty(accessor.get, 'depend', {
        value: depend,
        writable: true,
        enumerable: true,
        configurable: true
    });

    return accessor;
}
/**
 * autor: qw4wer
 * time: 2016/7/6 11:33
 * disc : 工厂方法
 */
function factory(definition, depend) {
    var key, accesses = {};
    depend = depend || [];
    for (key in definition) {
        if (skipAttribute[key])
            continue;
        accesses[key] = makeAccessor(depend);
    }
    var $vmodel = new Observer();

    Object.defineProperties($vmodel, accesses);

    for (key in definition) {
        $vmodel[key] = definition[key];
    }
    qvvm.hideProperty($vmodel, "$accesses", accesses);

    return $vmodel;
}


module.exports = {
    makeAccessor: makeAccessor,
    factory: factory
};