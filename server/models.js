const { query } = require('./db.js')

const getReviews = function(count=5) {
  const text = `SELECT json_build_object(
    'product', 8,
    'page', 0,
    'count', ${count},
    'results', (SELECT json_agg(json_build_object(
        'review_id', (SELECT id FROM reviews WHERE id=2),
        'rating', rating,
        'summary', summary,
        'recommended', recommended,
        'response', response,
        'body', body,
        'date', (SELECT to_char (to_timestamp("date"/1000) at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"')),
        'reviewer_name', reviewer_name,
        'helpfulness', helpfulness,
        'photos', (SELECT json_agg(json_build_object('id', id, 'url', url)) FROM "photos" WHERE review_id=5)

    )) FROM "reviews" WHERE product_id=2)
  )`;
  const values = [];
  return query(text);
}

module.exports = {
  getReviews,
}