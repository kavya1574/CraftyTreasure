require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrllocations=require('../controller/locations');
var ctrlothers=require('../controller/others')

/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/location', ctrllocations.locationInfo);
router.get('/location2', ctrllocations.locationInfo2);
router.get('/location3', ctrllocations.locationInfo3);
router.get('/location/review/new', ctrllocations.addReview);
/*others page*/
router.get('/about', ctrlothers.about);

router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);
module.exports = router;
