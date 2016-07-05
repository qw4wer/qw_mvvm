/**
 * Created by qw4wer on 2016/7/4.
 */

function test() {

    console.log(10);
}

function f2() {
    console.log('f2')
}
/**
 *dsad
 */
function makeAccessor() {
    var old = NaN;

    return {
        get: function () {
            return old;
        },

        set: function (val) {
            if (val === old) {
                return;
            }
            old = val;


        },
        enumerable: true,
        configurable: true


    }
}

module.exports = {
    test: test,
    f2: f2,
    makeAccessor: makeAccessor
};