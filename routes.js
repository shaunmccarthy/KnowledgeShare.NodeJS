var express = require('express');
var configuation = require('./configuration');
console.log(configuation);
console.log(configuation.pages);

var configureRoutes = function configureRoutes(server) {
  server.get('/', function(req, res) {
      // Pipe a file to the output stream
      // res.sendfile("client/index.html");
      var slides = configuation.pages.slides;
      configuation.pages.index.render(res, {slides: slides});
  });
  
  server.get('/slides/:slide', function (req, res) {
    var slide = req.params.slide;
    var page = configuation.pages.slides[slide];
    res.render(page.view, {title: page.title});
  });
  
  server.use(express.static(__dirname + '/client'));
};

exports.configureRoutes = configureRoutes;
