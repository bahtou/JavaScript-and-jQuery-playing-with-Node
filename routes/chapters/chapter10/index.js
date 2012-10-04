module.exports.tabs = function(req, res) {
  res.render('chapter10/tabs', {
    title: 'Tabbed Panels'
  });
};

module.exports.slider = function(req, res) {
  res.render('chapter10/slider', {
    title: 'Anything Slider'
  });
};

/* 
  converted to `switch` statement
  A good way to keep things compact
*/
module.exports.pages = function(req, res) {
  var page = req.params.num;
  switch (page) {
    case '1':
      res.render('chapter10/page1', {
        title: 'Pumpkins'
      });
      break;
    case '2':
      res.render('chapter10/page2', {
        title: 'Grapes'
      });
      break;
    case '3':
      res.render('chapter10/page3', {
        title: 'All About Fruits and Vegetables'
      });
      break;
  }
};

module.exports.tooltip = function(req, res) {
  res.render('chapter10/tooltip', {
    title: 'Tooltips'
  });
};