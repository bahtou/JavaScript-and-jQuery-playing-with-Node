module.exports.load = function(req, res) {
  res.render('chapter11/load', {
    title: 'News Headlines'
  });
};

module.exports.today = function(req, res) {
  res.render('chapter11/today', {
    title: 'News Headlines'
  });
};

module.exports.yesterday = function(req, res) {
  res.render('chapter11/yesterday', {
    title: 'News Headlines'
  });
};

module.exports.lastweek = function(req, res) {
  res.render('chapter11/lastweek', {
    title: 'News Headlines'
  });
};

module.exports.login = function(req, res) {
  res.render('chapter11/login', {
    title: 'Login'
  });
};

module.exports.loginPost = function(req, res) {
    var username = 'user'
      , password = 'admin'
      , data = req.body;
    
    if (data.username == username && data.password == password) {
      res.json({pass: true});
    }
    else {
      res.json({pass: false});
    }
};