/**
 * autor: qw4wer
 * time: 2016/7/11 10:19
 * disc :配置信息
 */


function config(configs) {
    for (var c in configs) {
        if (typeof config.handels[c] === 'function')
            config[c] = config.handels[c](configs[c]);
        else
            config[c] = configs[c];

    }
}

var handels = {
    interpolate: function (arr) {
        var openOperator = arr[0];
        var closeOperator = arr[1];

        if (openOperator === closeOperator) {
            throw new SyntaxError('起始符不能与截止符相同');
        }

        config.openOperator = openOperator;
        config.closeOperator = closeOperator;

        config.rexpr = new RegExp(openOperator + '([\\s\\S]*)' + closeOperator);


    }

}
config.handels = handels;

qvvm.config = config;


qvvm.config({
    debug: true,
    interpolate: ["{{", "}}"]
});
