const db = require('../db/config');

const airbnbModels = {};

airbnbModels.findAll = () => {
  return "everything from the db"
};

airbnbModels.findById = id => {
  return "find by id"
};
module.exports = airbnbModels;
