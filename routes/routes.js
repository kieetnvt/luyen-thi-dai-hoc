var app = global.app;

var BaseRoutes = require('../lib/app/base-routes.js');
var Routes = new BaseRoutes();

with(Routes) {
  get('/', 'index#index');

  get('/them-cau-hoi', 'question#addQuestions');
  get('/lay-cau-hoi', 'question#getQuestions');
}

exports = module.exports = Routes;