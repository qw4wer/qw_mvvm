var webpack = require('webpack');

var path = require('path');
var fs = require('fs')

module.exports = {
    entry: ['./src/qvvm'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'qvvm.js'
    }, module: {},


}