module.exports.console = function(req, res) {
  res.render('chapter15/console', {
    title: 'Using Firebug\'s console.log() Function'
  });
};

module.exports.debugger = function(req, res) {
  res.render('chapter15/debugger', {
    title: 'Using Firebug\'s Debugger'
  });
};