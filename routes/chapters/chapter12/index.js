module.exports.flickr = function(req, res) {
  res.render('chapter12/flickr', {
    title: 'Flickr Images'
  });
};

module.exports.map = function(req, res) {
  res.render('chapter12/map', {
    title: 'Google Maps'
  });
};