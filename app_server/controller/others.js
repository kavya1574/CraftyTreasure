/* GET 'about' page */
module.exports.about = function(req, res){
    res.render('generic-text', { title: 'About',
  content:'This concept involves creating a website that foucuses on promoting and supporting local artisans and their handmade craft products.The website serves as a platform to connect these artisans with a wider audience,allowing them to showcase their work and potentially sell their products online.The Websites primary goal is to highlight and support local artisans by providing them with a digital platform to showcase their handmade crafts. the emphasis is on promoting the uniqueness,creativity,and personal stories behind each artisans Worker.  The CraftyTreasure website serves as a digital hub for artisans to connect with potential customers and for craft enthusiasts to explore unique, handmade creations from their local community. it encourages the apprecciaion of craftsmanship, supports local businesses, and fosters a sense of connection and community among artisans and art lovers.'
 });
    
  
  };
  /* GET 'signin' page */
  module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    
  }