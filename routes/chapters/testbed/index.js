module.exports.arrayMethods = function(req, res) {
  res.render('testbed/array_methods', {
    title: 'Array Test Bed'
  });
};

module.exports.contentFunctions = function(req, res) {
  res.render('testbed/content_functions', {
    title: 'Regular Expression Tester'
  });
};

module.exports.effects = function(req, res) {
  res.render('testbed/effects', {
    title: 'JQuery Effects'
  });
};

module.exports.events = function(req, res) {
  res.render('testbed/events', {
    title: 'Events'
  });
};

module.exports.regex_tester = function(req, res) {
  res.render('testbed/regex_tester', {
    title: 'Regular Expression Tester'
  });
};

module.exports.selectors = function(req, res) {
  res.render('testbed/selectors', {
    title: 'JQuery Selector Test Bed'
  });
};