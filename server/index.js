const express = require('express');
require('dotenv').config();
const { getReviews, getReviewsMeta, postReviews, postMeta } = require('./models');

const server = express();
server.use(express.json());

//---------------------------------------------
// ROUTE ONE
//---------------------------------------------
server.get('/reviews', function(req, res) {
  getReviews().then((data) => {
    res.send(data.rows[0].json_build_object);
  }).catch(data => {
    res.send(data)
  })
});

server.post('/reviews', function(req,res) {
  console.log(req.data);
  const reviewObj = req.data; //extract;
  const metaObj = req.data; //extraxt...
  postReviews(reviewObj).then((data) => {
    res.send(data)
  }).catch((data) => {
    res.send(data)
  })

  postMeta( ) //..
})


//---------------------------------------------
// ROUTE TWO
//---------------------------------------------
server.get('/reviews/meta', function(req, res) {
  getReviewsMeta().then((data) => {
    res.send(data.rows[0].json_build_object);
  }).catch(data => {
    res.send(data)
  })
});


//---------------------------------------------
// ROUTE THREE
//---------------------------------------------
server.put('/reviews/:review_id/helpful', function(req,res) {

})


//---------------------------------------------
// ROUTE FOUR
//---------------------------------------------
server.put('/reviews/:review_id/report', function(req,res) {

})



server.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
});