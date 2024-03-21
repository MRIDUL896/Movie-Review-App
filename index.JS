const express = require("express");

const app = express();

//for reading JSON we use an express middleware
app.use(express.json());

//stitching the route here
require('./routes/review_routes')(app);

app.listen(4040,()=>{
    console.log(`Server started successfully`);
})