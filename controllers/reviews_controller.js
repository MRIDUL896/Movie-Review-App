//write the logic to create reviews

const ideas = require('../models/reviews_model');

/*create the controller for fetching all the ideas
GET localhost:4040/reviewApp/api/v1/reviews_model
Return list of all the reviews*/

exports.getAllReviews = (req,res)=>{
    //ST-1 Read all the reviews
    //ST-2 Send all the reviews
    res.status(200).send(ideas);
}