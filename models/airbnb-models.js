const db = require('../db/config');

const airbnbModels = {};

airbnbModels.findAll = () => {
  return db.query(`SELECT * FROM listings JOIN host_info ON listings.host_id = host_info.id`);
};

airbnbModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM listings
    JOIN host_info
    ON listings.host_id = host_info.id
    WHERE listings.id = $1
  `,
    [id]
  );
};

// airbnbModels.create = listings => {
//   return db.one(
//     `
//     INSERT INTO listings
//     (url, listing_title, city_location, room_specifics, superhost_or_not, description,
//     contact_host, amenities, sleep_arrange, access, reviews, price)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
//     RETURNING *
//   `,
//     [listings.url, listings.listing_title, listings.city_location, listings.room_specifics,
//     listings.superhost_or_not, listings.description, listings.contact_host, listings.amenities,
//     listings.sleep_arrange, listings.access, listings.reviews, listings.price]
//   );
// };

airbnbModels.add = host_info => {
  return db.one(
    `
     INSERT INTO host_info
     (host_title, host_city_location, date_joined, host_superhost_or_not,
     host_description, host_contact_host, policies, cancellation)
     VALUES ($/host_title/,$/host_city_location/,$/date_joined/,$/host_superhost_or_not/,
     $/host_description/,$/host_contact_host/,$/policies/,$/cancellation/)
     RETURNING *
    `, host_info);
}

airbnbModels.create = listings => {
  return db.one(
    `
    INSERT INTO listings
    (url, url_two, url_three, listing_title, city_location, room_specifics, superhost_or_not, description,
    contact_host, amenities, sleep_arrange, access, reviews, price, host_id)
    VALUES ($/url/, $/url_two/, $/url_three/, $/listing_title/, $/city_location/, $/room_specifics/, $/superhost_or_not/,
    $/description/, $/contact_host/, $/amenities/, $/sleep_arrange/, $/access/, $/reviews/, $/price/, $/host_id/)
    RETURNING *
  `, listings);
};

airbnbModels.update = (listings, id) => {
  return db.one(
    `
    UPDATE listings SET
      url = $1,
      url_two = $2,
      url_three = $3,
      listing_title = $4,
      city_location = $5,
      room_specifics = $6,
      superhost_or_not = $7,
      description = $8,
      contact_host = $9,
      amenities = $10,
      sleep_arrange = $11,
      access = $12,
      reviews = $13,
      price = $14,
      host_id = $15
    WHERE id = $16
    RETURNING *
  `,
  [listings.url, listings.url_two, listings.url_three,
  listings.listing_title, listings.city_location, listings.room_specifics,
  listings.superhost_or_not, listings.description, listings.contact_host,
  listings.amenities, listings.sleep_arrange, listings.access, listings.reviews,
  listings.price, listings.host_id, id],
  );
};

airbnbModels.updateHost = (host_info, id) => {
  return db.none(
    `
    UPDATE host_info SET
      host_title = $1,
      host_city_location = $2,
      date_joined = $3,
      host_superhost_or_not = $4,
      host_description = $5,
      host_contact_host = $6,
      policies = $6,
      cancellation = $7
    WHERE id = $8
    RETURNING *
    `,
    [host_info.host_title, host_info.host_city_location, host_info.date_joined,
    host_info.host_superhost_or_not, host_info.host_description,
    host_info.host_contact_host, host_info.policies, host_info.cancellation, id]
    )
}

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
