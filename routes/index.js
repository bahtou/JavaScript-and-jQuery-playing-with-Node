var chapters = require('./chapters')
  , one = chapters.One
  , two = chapters.Two
  , three = chapters.Three
  , four = chapters.Four
  , five = chapters.Five;


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


  //Chapter11
  //Submit Response
  app.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
  });

  //Response to submit
  app.post('/login', function(req, res, next) {
    var password = 'secret',
        username = '007';
    var data = req.body;
    
    if (data.username == username && data.password == password) {
      res.render('loginSuccess', {title: 'Logged In', status: 'You are now logged in!'});
    } else {
      res.render('loginSuccess', {title: 'Login', status: 'Wrong username/password!'});
    }
  });

};