const { query } = require('./db.js')

const getReviews = function(count=5) {
  let text = `SELECT json_build_object(
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

const getReviewsMeta = function (productID=2) {
  let text = `SELECT json_build_object(
    'product_id', ${productID},
    'ratings', (SELECT json_build_object(
      1, (SELECT COUNT(rating)FROM reviews WHERE rating=1 AND product_id=${productID}),
      2, (SELECT COUNT(rating) FROM reviews WHERE rating=2 AND product_id=${productID}),
      3, (SELECT COUNT(rating) FROM reviews WHERE rating=3 AND product_id=${productID}),
      4, (SELECT COUNT(rating) FROM reviews WHERE rating=4 AND product_id=${productID}),
      5, (SELECT COUNT(rating) FROM reviews WHERE rating=5 AND product_id=${productID})
    )),
    'recommended', json_build_object(
    0, (SELECT COUNT(recommended) FROM reviews WHERE product_id=${productID})
  ),
    'characteristics', json_build_object(
     'size', json_build_object(
         'id', 10,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=1)
     ),
      'width', json_build_object(
         'id', 11,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=2)
     ),
      'comfort', json_build_object(
         'id', 12,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=3)
     ),
      'quality', json_build_object(
         'id', 13,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=4)
     ),
      'length', json_build_object(
         'id', 14,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=5)
     ),
      'fit', json_build_object(
         'id', 15,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=6)
     )
  )
)`;
  return query(text);
}

const postReviews = function(obj) {
  let text = ``;
  const values = [];
  return query(text);
}


module.exports = {
  getReviews,
  getReviewsMeta,
  postReviews,
}

/* 6.12 - 12pm BASIC working structure:
SELECT json_build_object(
    'product_id', (SELECT product_id FROM reviews WHERE id=1),
    'ratings', (SELECT json_build_object(
      1, (SELECT COUNT(rating)FROM reviews WHERE rating=1 AND product_id=2),
      2, (SELECT COUNT(rating) FROM reviews WHERE rating=2 AND product_id=2),
      3, (SELECT COUNT(rating) FROM reviews WHERE rating=3 AND product_id=2),
      4, (SELECT COUNT(rating) FROM reviews WHERE rating=4 AND product_id=2),
      5, (SELECT COUNT(rating) FROM reviews WHERE rating=5 AND product_id=2)
    )),
    'recommended', json_build_object(
    0, (SELECT COUNT(recommended) FROM reviews WHERE product_id=2)
  ),
    'characteristics', json_build_object(
     'size', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=1)
     ),
      'width', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=2)
     ),
      'comfort', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=3)
     ),
      'quality', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=4)
     ),
      'length', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=5)
     ),
      'fit', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE review_id=6)
     )
  )
)
*/







/*
-- SELECT json_build_object(
  --     'product_id', (SELECT product_id FROM reviews WHERE id=5),
  --     'ratings', (SELECT json_build_object(
  --       1, (SELECT COUNT(value) AS "value" FROM characreviews WHERE id=5),
  --       2, (SELECT COUNT(value) AS "value" FROM characreviews WHERE id=5),
  --       3, (SELECT COUNT(value) AS "value" FROM characreviews WHERE id=5),
  --       4, (SELECT COUNT(value) AS "value" FROM characreviews WHERE id=5)
  --     ))
  -- )

  -- SELECT json_build_object(
  --   'recommended', json_build_object(
  --     0, (SELECT recommended FROM reviews WHERE id=2)
  --   )
  -- )


***************************
  THE BELOW WORKS FOR AVERAGING NUMBERS!!

  SELECT json_build_object(
  'characteristics', json_build_object(
     'size', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=2)
     ),
      'width', json_build_object(
         'id', 2,
        'value', (SELECT AVG(value) FROM characreviews WHERE characteristic_id=2)
     )
)
)
  */