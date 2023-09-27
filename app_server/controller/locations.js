module.exports.homelist=function(req,res){

    res.render('home-list',{
        title:'CraftyTreasures - arts of design',
pageHeader: {
    title: 'CraftyTreasures',
    strapline: 'arts of design'
},
sidebar: "searching for a unique art and craft desings? let CraftyTresures help you to find a unique arts of desing",
items: [{
    name: 'Street view of paris',
    imm: "images/s-l1200.jpg",
    rating: 3,
    description: 'Coloured Landscaper Paris Street View Original Handmade Oil Painting On Canvas Framed ( 40x3x28 )',
    price: '₹11,999',
    cart: 'Add to cart'
},{
    name: 'Jaipur Blue Pottery',
    imm: "images/blue pot.jpg",
    rating: 4,
    description: 'RAJ ROYAL Handmade Ceramic Hand Painted Blue Bail Potter',
    price: '₹3,999',
    cart: 'Add to cart'
},{
    name: 'Dream catcher',
    imm: "images/dream cap.jpg",
    rating: 2,
    description: 'Cotton Macrame Dream Catcher',
    price: '₹1,599',
    cart: 'Add to cart'
}]
});
};
module.exports.locationInfo=function(req,res){
    res.render('location-info',{
    title: 'Street view of paris',
    pageHeader: {
        title: 'Street view of paris'
    },
    items: {
        name: 'Street view of paris',
        imm: "images/s-l1200.jpg",
        rating: 3,
        description: 'Coloured Landscaper Paris Street View Original Handmade Oil Painting On Canvas Framed ( 40x3x28 )',
    },
    detailsofitem: [{
      Size : 'L',
      Numberofitems : '1',
      Size	: 'L',
      Orientation :	'Landscape',
      Shape	: 'Rectangular',
      Theme :	'Landscape',
      FrameType : 'Framed',
      Wallartform	: 'Painting',
      Material	: 'Canvas',
      Colour	: 'Multi',
      RoomType :	'Room Décor, Dining Décor'
    }],
    reviews: [{
        author: 'L.Madhusudhan',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'wow, Excellent'
    },{
        author: 'Jafar',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: ' Realistic peice of design and print, Quality of print is really good, Frame looks amazing, Packing is also good, Go ahead with this purchase, The painting is very nice, I feel very happy to see it everytime.'

    }]
  }
  );
 };
module.exports.locationInfo2=function(req,res){
    res.render('location-info2',{
        title: 'Jaipur Blue Pottery',
        pageHeader: {
            title: 'Jaipur Blue Pottery'
        },
        items: {
            name: 'Jaipur Blue Pottery',
            imm: "images/blue pot.jpg",
            rating: 4,
            description: 'RAJ ROYAL Handmade Ceramic Hand Painted Blue Bail Potter',
        },
        detailsofitem: [{
          BowlMaterial : 'Ceramic',
          Numberofpieces : '12',
          Brand	: 'RAJ ROYAL',
          Colour :	'Blue',
          Style	: 'Contemporary',
          RoomType :	'Room Décor, Dining Décor'
        }],
        reviews: [{
            author: 'Ammy',
            rating: 5,
            timestamp: '16 July 2011',
            reviewText: 'I like the designs and this give a great look to my dining room. loved it and quality is good.'
        },{
            author: 'Debina Kushari',
            rating: 3,
            timestamp: '16 June 2020',
            reviewText: 'Exactly what I expected! In fact its beyond!Quality, finishing, proportion, depth .. full marks!!! Loved it! Gonna repeat the order...'
    
        }]
      }
      );
     };
module.exports.locationInfo3=function(req,res){
    res.render('location-info3',{
            title: 'Dream Catcher',
            pageHeader: {
                title: 'Dream Catcher'
            },
            items: {
                name: 'Dream Catcher',
                imm: "images/dream cap.jpg",
                rating: 4,
                description: 'Zodics - Cotton Macrame Dream Catcher Type Woven Feather Wall Hanging Handmade Dreamcatcher Boho Tassels Decoration Home Decor Ornament Craft. (DC - 005)',
            },
            detailsofitem: [{
                Colour  : 'DC - 005',
                Brand	: 'Generic',
                Material	: 'Cotton',
                Theme	: 'Religious',
                Style	: 'Modern',
                TargetAudience : 'Women',
                IncludedComponents : 'Cotton Thread',
                MountingType	: 'Hanging',
                ItemPackageQuantity : '5'
            }],
            reviews: [{
                author: 'Abhilasha Rajpoot',
                rating: 5,
                timestamp: '21 May 2011',
                reviewText: 'Good one to gift your dear once. Its really a big dream catcher.'
            },{
                author: 'Taruni',
                rating: 3,
                timestamp: '19 November 2022',
                reviewText: 'Worth the money. Its huge and I recommend it 1000%'
        
            }]
          }
          );
         };

module.exports.addReview=function(req,res){
    res.render('location-review-form',{title:'Review',
     pageHeader: {
        title: 'Review'
     }});
};