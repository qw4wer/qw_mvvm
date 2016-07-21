var handler = function (dom, value) {
    if (typeof value === "object") {
        for (var i in value) {
            dom.setAttribute(i, value[i]);
        }
    } else {
        dom.setAttribute('value', value);
    }
}


module.exports = handler;