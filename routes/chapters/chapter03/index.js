module.exports.conditional = function(req, res) {
  res.render('chapter03/conditional', {
    title: 'Using Conditional Statements'
  });
};

module.exports.print_date = function(req, res) {
  res.render('chapter03/print_date', {
    title: 'Using Functions'
  });
};

module.exports.quiz = function(req, res) {
  res.render('chapter03/quiz', {
    title: 'A Simple Quiz'
  });
};