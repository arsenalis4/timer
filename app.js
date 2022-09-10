var express = require('express');
var fs = require('fs');
var app = express ();
var router = express.Router();

app.get('/', function(req, res){
    fs.readFile('index.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
})

app.get('/calendar', function(req, res){
    fs.readFile('calendar.html', function(error, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
})

app.listen(8000);