const db = require('../db/config');

const airbnbModels = {};

airbnbModels.findAll = () => {
  return db.query(`SELECT * FROM #`);
};

airbnbModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM #
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = airbnbModels;
