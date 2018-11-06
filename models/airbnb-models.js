const db = require('../db/config');

const airbnb-models = {};

airbnb-models.findAll = () => {
  return db.query(`SELECT * FROM #`);
};

airbnb-models.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM #
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = airbnb-models;
