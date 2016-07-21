function matchFirst(reg) {
    return function (str) {
        var arr = str.match(reg);
        if (arr.length > 1)
            return arr[1];
    }

}


module.exports = {
    matchFirst: matchFirst

};