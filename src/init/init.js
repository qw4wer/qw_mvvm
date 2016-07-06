/**
 * Created by qw4wer on 2016/7/4.
 */

var object =  require('../utils/object');

var subscribe = require('../subscribes/subscribe');

qvvm.fn = object.copy(qvvm.fn,subscribe);

//Object.defineProperties(qvvm, object.copy(qvvm.fn,subscribe));
