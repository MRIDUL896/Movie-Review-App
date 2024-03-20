const express = require("express");

const app = express();

//stitching the route here
require('./routes/review_routes')(app);

app.listen(4040,()=>{
    console.log(`Server started successfully`);
})