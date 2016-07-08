/**
 * autor: qw4wer
 * time: 2016/7/7 10:41
 * disc : 初始化方法
 */
var object = require('../utils/object');

var subscribe = require('../subscribes/subscribe');

var scan = require("../core/scan");


qvvm.fn = object.copy(qvvm.fn, subscribe);
qvvm.fn = object.copy(qvvm.fn, object);
qvvm.fn = object.copy(qvvm.fn, {scan:scan});

qvvm.prototype = qvvm.init.prototype = qvvm.fn;

//qvvm.prototype = {a:function(){console.log('a')}};