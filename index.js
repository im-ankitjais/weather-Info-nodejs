var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=jamshedpur&appid=c8ef0d8bb2bdfc8e962b06f71bf946b6';
var api = 'c8ef0d8bb2bdfc8e962b06f71bf946b6';

var server = http.createServer(function(request,response){

    var request = require('request');
    request(url, function(err, res, body) {
        var data = JSON.parse(body);
        response.write(`<html><body><div id='container'>`);
        response.write(`<h1> City Name:- ${data.name} <br /> </h1>`);
        response.write(`<h2> Temperature:- ${data.main.temp} <br /> </h2>`);
        response.write(`<h2> Sunset Time:- ${new Date(data.sys["sunset"]*1000)} <br /> </h2>`);
        response.write(`</div></body></html>`);
        response.end();
    })


}).listen(8081);