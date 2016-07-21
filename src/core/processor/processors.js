var val = require("./val");

var origin = {'qv-val': val};


function processor(name) {
    name = name || "";
    if (name === "")
        return qvvm.noop();

    var processor = origin[name];
    return processor;

}

module.exports = {
    processor: processor,
    origin: origin
};