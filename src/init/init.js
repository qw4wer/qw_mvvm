/**
 * autor: qw4wer
 * time: 2016/7/7 10:41
 * disc : 初始化方法
 */
var object = require('../utils/object');

var invok = require('../utils/functions/invok');

var subscribe = require('../core/subscribe');

var scan = require("../core/scan");

var define = require("../core/define");

var arr = [
    require('../utils/object'),
    require('../utils/functions/invok'),
    require('../core/subscribe'),
    require("../core/scan"),
    require("../core/define")
];

for(var i=0,a;a=arr[i++];){
    object.copy(qvvm.fn,a,false,true);
}

//qvvm.fn = object.copy(qvvm.fn, subscribe);
//qvvm.fn = object.copy(qvvm.fn, object);
//qvvm.fn = object.copy(qvvm.fn, {scan: scan});
//qvvm.fn = object.copy(qvvm.fn, {define: define});

qvvm.prototype = qvvm.init.prototype = qvvm.fn;

//qvvm.prototype = {a:function(){console.log('a')}};