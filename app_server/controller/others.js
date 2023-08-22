/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About' });
    
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    
  }