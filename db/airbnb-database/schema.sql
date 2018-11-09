\c airbnb

CREATE TABLE IF NOT EXISTS host_info (
	id SERIAL PRIMARY KEY NOT NULL,
	host_title VARCHAR(10000) NOT NULL,
	host_photo VARCHAR (10000) NOT NULL,
	host_city_location VARCHAR(10000) NOT NULL,
	date_joined VARCHAR(10000) NOT NULL,
	host_superhost_or_not VARCHAR(10000) NOT NULL,
	host_description VARCHAR(10000) NOT NULL,
	host_contact_host VARCHAR(10000) NOT NULL,
	policies VARCHAR(10000) NOT NULL,
	cancellation VARCHAR(10000) NOT NULL
);

CREATE TABLE IF NOT EXISTS listings (
	id SERIAL PRIMARY KEY ,
	url VARCHAR(10000) ,
	url_two VARCHAR(10000) ,
	url_three VARCHAR (10000) ,
	listing_title VARCHAR(10000) ,
	city_location VARCHAR(10000) ,
	room_specifics VARCHAR(10000) ,
	superhost_or_not VARCHAR(10000) ,
	description VARCHAR(10000) ,
	space VARCHAR(10000) ,
	guest_access VARCHAR(10000) ,
	interaction VARCHAR(10000) ,
	other VARCHAR(10000) ,
	contact_host VARCHAR(10000) ,
	amenities_one VARCHAR(10000) ,
	amenities_two VARCHAR(10000) ,
	amenities_three VARCHAR(10000) ,
	amenities_four VARCHAR(10000) ,
	sleep_arrange VARCHAR(10000) ,
	access VARCHAR(10000),
	review_one VARCHAR(10000) ,
	review_two VARCHAR(10000) ,
	review_three VARCHAR(10000) ,
	price VARCHAR(10000) ,
	host_id INTEGER REFERENCES host_info(id)
);
