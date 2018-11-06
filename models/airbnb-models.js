const db = require('../db/config');

const airbnbModels = {};

airbnbModels.findAll = () => {

  return db.query(`SELECT * FROM listings`);
};

airbnbModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM listings
    WHERE id = $1
  `,
    [id]
  );
};

airbnbModels.create = listings => {
  return db.one(
    `
    INSERT INTO listings
    (url, listing_title, city_location, room_specifics, superhost_or_not, description,
    contact_host, ammenities, sleep_arrange, access, reviews, price)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 $12)
    RETURNING *
  `,
    [airbnb.url, airbnb.listing_title, airbnb.city_location, airbnb.room_sepcifics,
    airbnb.superhost_or_not, airbnb.description, airbnb.amentities, ]
  );
};

airbnbModels.update = (listings, id) => {
  return db.one(
    `
    UPDATE listings SET
      url = $1,
      listing_title = $2,
      city_location = $3,
      room_specifics = $4,
      superhost_or_not = $5,
      description = $6,
      contact_host = $7,
      ammenities = $8,
      sleep_arrange = $9,
      access = $10,
      reviews = $11,
      price = $12,
    WHERE id = $13
    RETURNING *
  `,
    [listings.url, listings.listing_title, listings.city_location, listings.room_sepcifics,
    listings.superhost_or_not, listings.description, listings.amentities, ]
  );
};

airbnbModels.destroy = id => {
  return db.none(
    `
    DELETE FROM listings
    WHERE id = $1
  `,
    [id]
  );
};


module.exports = airbnbModels;
