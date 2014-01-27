var Page = require('./page');

var pages = {
  index: new Page('index', 'Slides'),
  slides: [
    new Page('slides/reference', 'Reference')
  ]
};

exports.pages = pages;