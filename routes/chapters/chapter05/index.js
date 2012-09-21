module.exports.events_intro = function(req, res) {
  res.render('chapter05/events_intro', {
    title: 'Introducing Events'
  });
};

module.exports.faq = function(req, res) {
  res.render('chapter05/faq', {
    title: 'A One Page FAQ'
  });
};