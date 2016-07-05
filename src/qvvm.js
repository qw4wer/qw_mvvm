/**
 * Created by qw4wer on 2016/7/4.
 */

var subscribe = require('./subscribes/subscribe');

qvvm = require("./init/init");

qvvm.fn = subscribe.f2;


module.exports = qvvm;