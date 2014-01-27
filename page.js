var extend = require('node.extend');

function Page(view, title) {
  this.view = view;
  this.title = title;
}

Page.prototype.render = function(res, options) {
  options = extend( {title: this.title}, options );
  res.render(this.view, options);
};

module.exports = Page;
