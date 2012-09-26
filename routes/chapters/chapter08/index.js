module.exports.inpagelinks = function(req, res) {
  res.render('chapter08/inpagelinks', {
    title: 'In Page Viewer'
  });
};

module.exports.menu = function(req, res) {
  res.render('chapter08/menu', {
    title: 'Navigation Menu'
  });
};