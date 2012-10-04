module.exports.delegate = function(req, res) {
  res.render('chapter13/delegate', {
    title: 'Using .delegate()'
  });
};

module.exports.find = function(req, res) {
  res.render('chapter13/find', {
    title: 'Using .find()'
  });
};

module.exports.find3 = function(req, res) {
  res.render('chapter13/find3', {
    title: 'Traversing the DOM'
  });
};

module.exports.nextall = function(req, res) {
  res.render('chapter13/nextall', {
    title: 'Using .prevAll and .nextAll()'
  });
};

module.exports.parent = function(req, res) {
  res.render('chapter13/parent', {
    title: 'Using .parent()'
  });
};

module.exports.siblings = function(req, res) {
  res.render('chapter13/siblings', {
    title: 'Using .siblings()'
  });
};

module.exports.wrap = function(req, res) {
  res.render('chapter13/wrap', {
    title: 'Using .wrap()'
  });
};