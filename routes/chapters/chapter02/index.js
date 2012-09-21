module.exports.use_variable = function(req, res) {
  res.render('chapter02/use_variable',
  {
    title: 'Using a Variable'
  });
};

module.exports.prompt = function(req, res) {
  res.render('chapter02/prompt',
  {
    title: 'Using a Variable, Part II'
  });
};

module.exports.arrays = function(req, res) {
  res.render('chapter02/arrays',
  {
    title: 'Creating and Using Arrays'
  });
};