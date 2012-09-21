module.exports.hello = function(req, res) {
  res.render('chapter01/hello',
    {
      title: 'Hello World'
    });
};

module.exports.hello2 = function(req, res) {
  res.render('chapter01/hello2',
  {
    title: 'Writing to the Document Window'
  });
};

module.exports.fadeIn = function(req, res) {
  res.render('chapter01/fadeIn',
  {
    title: 'Fade In'
  });
};