require('dotenv').config();
const { Pool } = require('pg');
// guide used Client instead of pool.

// switched host from local host to aws host?
// user try postgres
// try ubuntu @ longer aws address as host name
const pool = new Pool({
  user: 'postgres',
  password: '6996',
  host: process.env.host,
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
