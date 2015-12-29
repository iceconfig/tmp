/**
 * Created by iceConfig on 2015/12/24.
 */
var app = require('express')();
var bodyParser = require('body-parser');
app.listen(8000);
app.use(bodyParser.urlencoded({extended: true}));
var tweets = [];
app.get('/', function (req, res) {
    console.info('get / in');
    res.send('Welcome to Node Twitter');
});
app.post('/send', function (req, res) {
    console.info(req.body);
    if (req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status: "ok", message: "Tweet received"});
    } else {
        res.send({status: "ok", message: "No tweet recevied"});
    }
});
app.get('/tweets', function (req, res) {
    res.send(tweets);
});
