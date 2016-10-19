
/*
 * GET home page.
 */

exports.login = function(req, res){
  res.render('login');
};

exports.index = function(req, res){
  res.render('index');
};

exports.register = function(req, res){
  res.render('register');
};

exports.logout = function(req, res){
  res.render('logout');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};