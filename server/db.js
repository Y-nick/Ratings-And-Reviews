require('dotenv').config();
const { Pool } = require('pg');
// guide used Client instead of pool.

// switched host from local host to aws host?
const pool = new Pool({
  user: 'yanick',
  password: '',
  host: '18.216.153.175',
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
