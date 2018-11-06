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

airbnbController.create = (req, res) => {
  Airbnb.create({
    url: req.body.url,
    listing_title: $2,
    city_location: req.body.city_location,
    room_specifics: req.body.room_specifics,
    superhost_or_not: req.body.superhost_or_not,
    description: req.body.description,
    contact_host: req.body.contact_host,
    ammenities: req.body.ammenities,
    sleep_arrange: req.body.sleep_arrange,
    access: $req.body.access,
    reviews: $req.body.reviews,
    price: $req.body.price
  })
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

airbnbController.update = (req, res) => {
  Airbnb.update(
    {
      url: req.body.url,
      listing_title: $2,
      city_location: req.body.city_location,
      room_specifics: req.body.room_specifics,
      superhost_or_not: req.body.superhost_or_not,
      description: req.body.description,
      contact_host: req.body.contact_host,
      ammenities: req.body.ammenities,
      sleep_arrange: req.body.sleep_arrange,
      access: $req.body.access,
      reviews: $req.body.reviews,
      price: $req.body.price
    },
    req.params.id,
  )
    .then(airbnb => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

airbnbController.destroy = (req, res) => {
  Airbnb.destroy(req.params.id)
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
