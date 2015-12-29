/**
 * Created by iceConfig on 2015/12/29.
 */
var http = require('http'),
    assert = require('assert');
var opts = {
    host: '127.0.0.1',
    port: 8000,
    path: '/send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
var req = http.request(opts, function (res) {
    res.setEncoding('utf8');
    var data = "";
    res.on('data', function (d) {
        data += d;
    });
    res.on('end', function () {
        assert.strictEqual(data, '{"status":"ok","message":"Tweet received"}');
    });
});
req.write('tweet=test');
req.end();