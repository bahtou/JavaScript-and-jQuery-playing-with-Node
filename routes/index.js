var chapters = require('./chapters')
  , one = chapters.One
  , two = chapters.Two
  , three = chapters.Three
  , four = chapters.Four
  , five = chapters.Five
  , six = chapters.Six
  , seven = chapters.Seven
  , eight = chapters.Eight
  , nine = chapters.Nine
  , ten = chapters.Ten
  , eleven = chapters.Eleven
  , twelve = chapters.Twelve
  , thirteen = chapters.Thirteen
  , fourteen = chapters.Fourteen
  , fifteen = chapters.Fifteen
  , testbed = chapters.Testbed;


module.exports = function(app) {
  //Chapter01
  app.get('/hello', one.hello);
  app.get('/hello2', one.hello2);
  app.get('/fadeIn', one.fadeIn);

  //Chapter02
  app.get('/use_variable', two.use_variable);
  app.get('/prompt', two.prompt);
  app.get('/arrays', two.arrays);

  //Chapter03
  app.get('/conditional', three.conditional);
  app.get('/print_date', three.print_date);
  app.get('/quiz', three.quiz);

  //Chapter04
  app.get('/pull_quote', four.pull_quote);
  app.get('/bibliography', four.bibliography);

  //Chapter05
  app.get('/events_intro', five.events_intro);
  app.get('/faq', five.faq);

  //Chapter06
  app.get('/signup', six.signup);
  app.get('/animate', six.animate);
  app.get('/callback', six.callback);

  //Chapter07
  app.get('/rollover', seven.rollover);
  app.get('/gallery', seven.gallery);
  app.get('/fancybox', seven.fancybox);
  app.get('/youtube', seven.youtube);

  //Chapter08
  app.get('/in-page-links', eight.inpagelinks);
  app.get('/menu', eight.menu);

  //Chapter09
  app.get('/validation', nine.validation);
  app.get('/form', nine.form);
  app.post('/process', nine.process);

  //Chapter10
  app.get('/tabs', ten.tabs);
  app.get('/slider', ten.slider);
  app.get('/page:num', ten.pages);
  app.get('/tooltip', ten.tooltip);

  //Chapter11
  app.get('/load', eleven.load);
  app.get('/today', eleven.today);
  app.get('/yesterday', eleven.yesterday);
  app.get('/lastweek', eleven.lastweek);

  app.get('/login', eleven.login);
  app.post('/login', eleven.loginPost);

  //Chapter12
  app.get('/flickr', twelve.flickr);
  app.get('/map', twelve.map);


  //Chapter13
  app.get('/delegate', thirteen.delegate);
  app.get('/find', thirteen.find);
  app.get('/find3', thirteen.find3);
  app.get('/nextall', thirteen.nextall);
  app.get('/parent', thirteen.parent);
  app.get('/siblings', thirteen.siblings);
  app.get('/wrap', thirteen.wrap);

  //Chapter14
  app.get('/time', fourteen.time);

  //Chapter15
  app.get('/console', fifteen.console);
  app.get('/debugger', fifteen.debugger);

  //testbed
  app.get('/array_methods', testbed.arrayMethods);
  app.get('/content_functions', testbed.contentFunctions);
  app.get('/effects', testbed.effects);
  app.get('/events', testbed.events);
  app.get('/regex_tester', testbed.regex_tester);
  app.get('/selectors', testbed.selectors);
};

