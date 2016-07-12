/**
 * autor: qw4wer
 * time: 2016/7/8 17:48
 * disc :
 */

var hasConsole = global.console;


function log() {
    if (hasConsole && qvvm.config.debug) {
        Function.apply.call(console.log, console, arguments);
    }
}

function warn() {
    if (hasConsole && qvvm.config.debug) {
        var method = console.warn || console.log;
        Function.apply.call(method, console, arguments)
    }
}

function error() {
    throw (e || Error)(str);
}


module.exports = {
    log: log,
    warn: warn,
    error: error
}