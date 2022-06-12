const express = require('express');
require('dotenv').config();
const { getReviews, getReviewsMeta } = require('./models');

const server = express();
server.use(express.json());

//---------------------------------------------
// ROUTE ONE
//---------------------------------------------
server.get('/reviews', function(req, res) {
  getReviews().then((data) => {
    console.log('IND LOG', data)
    res.send(data.rows[0].json_build_object);
  }).catch(data => {
    res.send(data)
    console.log(data)
  })
});


server.put('/reviews', function(req,res) {

})

//---------------------------------------------
// ROUTE TWO
//---------------------------------------------
server.get('/reviews/meta', function(req, res) {
  getReviewsMeta().then((data) => {
    console.log('IND LOG', data)
    res.send(data.rows[0].json_build_object);
  }).catch(data => {
    res.send(data)
  })
});

server.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
});