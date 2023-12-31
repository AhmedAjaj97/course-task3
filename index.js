const express = require("express");

const router= require('./router/router.js');
 const cors= require('cors');
const app=express();


app.use(cors());
app.use(express.urlencoded({extended : true}))
app.use(router);

app.listen("3000",()=>{
    console.log("Listening on port 3000....")
})