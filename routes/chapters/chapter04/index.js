module.exports.pull_quote = function(req, res) {
  res.render('chapter04/pull_quote', {
    title: 'Auto-Pull Quotes'
  });
};

module.exports.bibliography = function(req, res) {
  res.render('chapter04/bibliography', {
    title: 'A Dynamically Created Bibliography'
  });
};