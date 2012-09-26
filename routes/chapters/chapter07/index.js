module.exports.rollover = function(req, res) {
  res.render('chapter07/rollover', {
    title: 'Rollover Images'
  });
};

module.exports.gallery = function(req, res) {
  res.render('chapter07/gallery', {
    title: 'Slideshow'
  });
};

module.exports.fancybox = function(req, res) {
  res.render('chapter07/fancybox', {
    title: 'Gallery'
  });
};

module.exports.youtube = function(req, res) {
  res.render('chapter07/youtube', {
    title: 'YouTube'
  });
};