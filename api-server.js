//var fs = require('fs');
var path = require('path');
var express = require('express');
//var bodyParser = require('body-parser');
var app = express();


app.use('/', express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.listen(1234);

console.log('Server listenening on PORT 1234');