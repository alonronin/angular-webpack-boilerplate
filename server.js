var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');

var app = express();

if (app.get('env') === 'development') {
    app.use(
        webpackMiddleware(webpack(webpackConfig), {
            publicPath: '/',
            stats: {colors: true}
        })
    );
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
    res.sendFile('index.html', {root: __dirname + '/public/'});
});

module.exports = app;
