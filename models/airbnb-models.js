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

airbnbModels.add = host_info => {
  return db.one(
    `
     INSERT INTO host_info
     (host_title, host_photo, host_city_location, date_joined, host_superhost_or_not,
     host_description, host_contact_host, policies, cancellation)
     VALUES ($/host_title/, $/host_photo/, $/host_city_location/,$/date_joined/,$/host_superhost_or_not/,
     $/host_description/,$/host_contact_host/,$/policies/,$/cancellation/)
     RETURNING *
    `, host_info);
}

airbnbModels.create = listings => {
  return db.one(
    `
    INSERT INTO listings
    (url, url_two, url_three, listing_title, city_location, room_specifics, superhost_or_not, description,
    space, guest_access, interaction, other,
    contact_host, amenities_one, amenities_two, amenities_three, amenities_four,
    sleep_arrange, access, review_one, review_two, review_three, price, host_id)
    VALUES ($/url/, $/url_two/, $/url_three/, $/listing_title/,
    $/city_location/, $/room_specifics/, $/superhost_or_not/,
    $/description/, $/space/, $/guest_access/, $/interaction/, $/other/, $/contact_host/,
    $/amenities_one/, $/amenities_two/, $/amenities_three/, $/amenities_four/, $/sleep_arrange/,
    $/access/, $/review_one/, $/review_two/, $/review_three/, $/price/, $/host_id/)
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
      space = $9,
      guest_access = $10,
      interaction = $11,
      other = $12,
      contact_host = $13,
      amenities_one = $14,
      amenities_two = $15,
      amenities_three = $16,
      amenities_four = $17,
      sleep_arrange = $18,
      access = $19,
      review_one = $20,
      review_two = $21,
      review_three = $22,
      price = $23,
      host_id = $24
    WHERE id = $25
    RETURNING *
  `,
  [listings.url, listings.url_two, listings.url_three,
  listings.listing_title, listings.city_location, listings.room_specifics,
  listings.superhost_or_not, listings.description,
  listings.space, listings.guest_access, listings.interaction, listings.other, listings.contact_host,
  listings.amenities_one, listings.amenities_two, listings.amenities_three,
  listings.amenities_four, listings.review_one, listings.review_two, listings.review_three,
  listings.amenities, listings.sleep_arrange, listings.access, listings.reviews,
  listings.price, listings.host_id, id],
  );
};

airbnbModels.updateHost = (host_info, id) => {
  return db.none(
    `
    UPDATE host_info SET
      host_title = $1,
      host_photo = $2,
      host_city_location = $3,
      date_joined = $4,
      host_superhost_or_not = $5,
      host_description = $6,
      host_contact_host = $7,
      policies = $8,
      cancellation = $9
    WHERE id = $10
    RETURNING *
    `,
    [host_info.host_title, host_info.host_photo, host_info.host_city_location, host_info.date_joined,
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
