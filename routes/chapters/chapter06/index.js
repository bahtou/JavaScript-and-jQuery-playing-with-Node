module.exports.signup = function(req, res) {
  res.render('chapter06/signup', {
    title: 'Slide in Login Screen'
  });
};

module.exports.animate = function(req, res) {
  res.render('chapter06/animate', {
    title: 'A Slide In Dashboard'
  });
};

module.exports.callback = function(req, res) {
  res.render('chapter06/callback', {
    title: 'Callback with toggle'
  });
};