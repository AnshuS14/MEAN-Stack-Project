var express = require('express');
var app = express();

app.use(express.static(__dirname + "/Public"));

app.listen(3000);
console.log("its my birthday!!!! XOXO");