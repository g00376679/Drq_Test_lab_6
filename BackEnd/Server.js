const express = require('express')
const app = express()
//if same server running two place it would be crash so you have to chnage the port no. into 4000
//type again node server.js it will work 
const port = 4000
//import the liabrary
const cors = require('cors');
 //use bodyparser function
 const bodyParser = require("body-parser");


 //using app cors funaction
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

   
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/movies', (req, res)=>{
    const mymovies =[
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];
    res.status(200).json({
        //pass the message what you like
        message: "Everything is ok",
        movies:mymovies});
})

app.post('/api/movies', (req, res)=>{
    console.log('Movies Recieved!');
    console.log(req,body.title);
    console.log(req,body.year);
    console.log(req,body.poster);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})