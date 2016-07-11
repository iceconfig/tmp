/**
 * Created by ZHL on 2016/6/27.
 */
var http = require('http'),
    url = require('url'),
    proxy = require('proxy-middleware'),
    vhost = require('vhost'),
    connect = require('connect');

var app = connect();
var app1 = url.parse('http://127.0.0.1:3000/');

app.use(vhost('127.0.0.1',proxy(app1)));

app.use(vhost('localhost',function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end('localhost');
}));
http.createServer(app).listen(8081);