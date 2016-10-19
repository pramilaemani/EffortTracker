
/**
 * Module dependencies
 */

require('rootpath')();
var express = require('express'),
  bodyParser = require('body-parser'),     
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
  session = require('express-session');
  expressJwt = require('express-jwt');
  config = require('config.json');


var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));
// use JWT auth to secure the api
app.use('/routes', expressJwt({ secret: config.secret }).unless({ path: ['/routes/authenticate', '/routes/register'] }));

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.login);
app.get('/login', routes.login);
app.get('/index', routes.index);
app.get('/register', routes.register);
app.get('/logout', routes.logout);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
