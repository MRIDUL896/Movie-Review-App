//written the logic to create reviews

//ST-1 Reading all the reviews
const reviews = require('../models/reviews_model');
let id_cnt = 3;

/*created a controller for fetching all the ideas
GET localhost:4040/reviewApp/api/v1/reviews
Return list of all the reviews*/
exports.getAllReviews = (req,res)=>{
    //ST-2 Sending all the reviews
    res.status(200).send(reviews);
}


/*created a controller for getting review by review id
GET localhost:4040/reviewApp/api/v1/reviews/{ID}  */
exports.getReviewById = (req,res)=>{
    const review_id = req.params.id;
    if(reviews[review_id]){
        res.status(200).send(reviews[review_id]);
    }else{
        res.status(404).send({
            err : "not found"
        })
    }
}


/*created a controller for posting review 
POST localhost:4040/reviewApp/api/v1/reviews  */
exports.post_review = (req,res)=>{
    const review_obj = req.body;
    id_cnt++;
    review_obj["id"] = id_cnt;
    reviews[id_cnt] = review_obj;
    res.status(201).send(review_obj);
}


/*created a controller for updating review 
PUT localhost:4040/reviewApp/api/v1/reviews/:id  */
exports.update_review = (req,res)=>{
    const review_id = req.params.id;
    const new_review = req.body;
    if(review_id){
        reviews[review_id] = new_review;
        res.status(200).send(new_review)
    }else{
        return res.status(404).send({
            err : "Review not found"
        })
    }
}


/*created a controller for deleting review 
DELETE localhost:4040/reviewApp/api/v1/reviews/:id  */
exports.delete_review = (req,res)=>{
    const review_id = req.params.id;
    if(review_id){
        delete reviews[review_id];
        res.status(200).send({
            message :'Deletion success full' 
        })
    }else{
        res.status(404).send({
            err : "Review not found"
        })
    }
}