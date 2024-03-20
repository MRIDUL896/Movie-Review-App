/*Route for
GET localhost:4040/reviewApp/api/v1/reviews
*/

const review_controller = require('../controllers/reviews_controller')

//connect app with route
module.exports = (app)=>{
    app.get('/reviewApp/api/v1/reviews',review_controller.getAllReviews);
}