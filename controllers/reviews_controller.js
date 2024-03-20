//written the logic to create reviews

//ST-1 Reading all the reviews
const ideas = require('../models/reviews_model');

/*created the controller for fetching all the ideas
GET localhost:4040/reviewApp/api/v1/reviews
Return list of all the reviews*/

exports.getAllReviews = (req,res)=>{
    //ST-2 Sending all the reviews
    res.status(200).send(ideas);
}