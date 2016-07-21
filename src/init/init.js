/**
 * autor: qw4wer
 * time: 2016/7/7 10:41
 * disc : 初始化方法
 */


var arr = [
    require('../core/subscribe'),
    require('../core/scan'),
    require('../core/define'),
    require('../core/config'),
    require('../utils/object'),
    require('../utils/functions/invok'),
    require('../utils/dom/ready'),
    require('../utils/regular'),

];
for(var i=0,a;a=arr[i++];){
    qvvm.extend(qvvm,a,false,true);
}


qvvm.prototype = qvvm.init.prototype = qvvm.fn;
