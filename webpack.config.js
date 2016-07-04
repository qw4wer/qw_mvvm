var webpack = require('webpack');

var path = require('path');
var fs = require('fs');

var author = 'qw4wer';


var now = new Date
var snow = now.getFullYear()+'-'+ (now.getMonth()+1) +
    '-'+ now.getDate()+':'+ now.getHours()

module.exports = {
    entry: ['./src/qvvm'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'qvvm.js'
    }, module: {},
    plugins: [
        new webpack.BannerPlugin('built in ' + snow + ' by ' + author + '\n')
    ],

}