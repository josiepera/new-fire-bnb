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

airbnbController.create = (req, res, next) => {
  console.log('REQBODY', req.body)
  const theData = {
    url: req.body.url,
    url_two: req.body.url_two,
    url_three: req.body.url_three,
    listing_title: req.body.listing_title,
    city_location: req.body.city_location,
    room_specifics: req.body.room_specifics,
    superhost_or_not: req.body.superhost_or_not,
    description: req.body.description,
    space: req.body.space,
    guest_access: req.body.guest_access,
    interaction: req.body.interaction,
    other: req.body.other,
    contact_host: req.body.contact_host,
    amenities_one: req.body.amenities_one,
    amenities_two: req.body.amenities_two,
    amenities_three: req.body.amenities_three,
    amenities_four: req.body.amenities_four,
    sleep_arrange: req.body.sleep_arrange,
    access: req.body.access,
    review_one: req.body.review_one,
    review_two: req.body.review_two,
    review_three: req.body.review_three,
    price: req.body.price,
    host_id: req.body.host_id
  }
  Airbnb.create(theData)
    .then(airbnb => {
      res.locals.data = airbnb;
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

airbnbController.add = (req, res) => {
  Airbnb.add({
    host_title: req.body.host_title,
    host_photo: req.body.host_photo,
    host_city_location: req.body.host_city_location ,
    date_joined: req.body.date_joined,
    host_superhost_or_not: req.body.host_superhost_or_not,
    host_description: req.body.host_description,
    host_contact_host: req.body.host_contact_host,
    policies: req.body.policies,
    cancellation: req.body.cancellation
  })
    .then(airbnb => {
      res.json({
        message: 'ok',
        data: res.locals.data,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


airbnbController.update = (req, res, next) => {
  Airbnb.update(
    {
      url: req.body.url,
      url_two: req.body.url_two,
      url_three: req.body.url_three,
      listing_title: req.body.listing_title,
      city_location: req.body.city_location,
      room_specifics: req.body.room_specifics,
      superhost_or_not: req.body.superhost_or_not,
      description: req.body.description,
      space: req.body.space,
      guest_access: req.body.guest_access,
      interaction: req.body.interaction,
      other: req.body.other,
      contact_host: req.body.contact_host,
      amenities_one: req.body.amenities_one,
      amenities_two: req.body.amenities_two,
      amenities_three: req.body.amenities_three,
      amenities_four: req.body.amenities_four,
      sleep_arrange: req.body.sleep_arrange,
      access: req.body.access,
      review_one: req.body.review_one,
      review_two: req.body.review_two,
      review_three: req.body.review_three,
      price: req.body.price,
      host_id: req.body.host_id
    },
    req.params.id
    )
    .then(airbnb => {
      res.locals.data = airbnb;
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

airbnbController.updateHost = (req, res) => {
  Airbnb.updateHost({
    host_title: req.body.host_title,
    host_photo: req.body.host_photo,
    host_city_location: req.body.host_city_location ,
    date_joined: req.body.date_joined,
    host_superhost_or_not: req.body.host_superhost_or_not,
    host_description: req.body.host_description,
    host_contact_host: req.body.host_contact_host,
    policies: req.body.policies,
    cancellation: req.body.cancellation
  },
  req.params.id)
   .then(airbnb => {
      res.json({
        message: 'ok',
        data: res.locals.data,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

airbnbController.destroy = (req, res) => {
  Airbnb.destroy(req.params.id)
    .then(airbnb => {
      res.json({
        message: 'deleted',
        data: airbnb,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


module.exports = airbnbController;
