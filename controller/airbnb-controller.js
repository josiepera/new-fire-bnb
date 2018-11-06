const Airbnb = require('../models/airbnb-models');

const airbnbController = {};

airbnbController.index = (req, res) => {
  Airbnb.findAll()
    .then(airbnbs => {
      res.json({
        message: 'ok',
        data: airbnbs,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

airbnbController.show = (req, res) => {
  Airbnb.findById(req.params.id)
    .then(airbnb => {
      res.json({
        message: 'ok',
        data: airbnb,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = airbnbController;
