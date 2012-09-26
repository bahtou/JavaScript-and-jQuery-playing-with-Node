module.exports.validation = function(req, res) {
  res.render('chapter09/validation', {
    title: 'Signup'
  });
};

module.exports.form = function(req, res) {
  res.render('chapter09/form', {
    title: 'Fun With Forms'
  });
};

module.exports.process = function(req, res) {
  res.render('chapter09/process', {
    title: 'Form Processed'
  });
};