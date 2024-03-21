/*Route for
GET localhost:4040/reviewApp/api/v1/reviews
*/

const review_controller = require('../controllers/reviews_controller')

//connect app with route 
module.exports = (app)=>{
    //GET localhost:4040/reviewApp/api/v1/reviews
    app.get('/reviewApp/api/v1/reviews',review_controller.getAllReviews);

    //GET localhost:4040/reviewApp/api/v1/reviews/{ID}
    app.get('/reviewApp/api/v1/reviews/:id',review_controller.getReviewById);

    //POST localhost:4040/reviewApp/api/v1/reviews
    app.post('/reviewApp/api/v1/reviews',review_controller.post_review);

    //PUT localhost:4040/reviewApp/api/v1/reviews/:id
    app.put('/reviewApp/api/v1/reviews/:id',review_controller.update_review);

    //DELETE localhost:4040/reviewApp/api/v1/reviews/:id
    app.delete('/reviewApp/api/v1/reviews/:id',review_controller.delete_review);
}