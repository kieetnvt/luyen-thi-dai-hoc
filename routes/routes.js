var app = global.app;

var BaseRoutes = require('../lib/app/base-routes.js');
var Routes = new BaseRoutes();

with(Routes) {
  get('/', 'index#index');
}

exports = module.exports = Routes;