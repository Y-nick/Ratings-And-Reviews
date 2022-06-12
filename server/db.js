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
