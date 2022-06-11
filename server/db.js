require('dotenv').config();
const { Pool } = require('pg');
// guide used Client instead of pool.

const pool = new Pool({
  user: 'yanick',
  password: '',
  host: 'localhost',
  database: 'reviewsdb',
  port: 5432,
});

pool.connect();


module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  }
}
//NOTE: run node file to get data from database 'node ./server/db.js'


// console.log(pool.query(`SELECT json_build_object(
//   'product', 8,
//   'page', 0,
//   'count', 5,
//   'results', (SELECT json_agg(json_build_object(
//       'review_id', (SELECT id FROM reviews WHERE id=2),
//       'rating', rating,
//       'summary', summary,
//       'recommended', recommended,
//       'response', response,
//       'body', body,
//       'date', (SELECT to_char (to_timestamp("date"/1000) at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')),
//       'reviewer_name', reviewer_name,
//       'helpfulness', helpfulness,
//       'photos', (SELECT json_agg(json_build_object('id', id, 'url', url)) FROM "photos" WHERE review_id=5)

//   )) FROM "reviews" WHERE product_id=2)
// )`).then(data => {
//   console.log(data)
// }));