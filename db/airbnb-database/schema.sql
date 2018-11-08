\c airbnb

CREATE TABLE IF NOT EXISTS host_info (
	id SERIAL PRIMARY KEY NOT NULL,
	host_title VARCHAR(10000) NOT NULL,
	host_city_location VARCHAR(10000) NOT NULL,
	date_joined VARCHAR(10000) NOT NULL,
	host_superhost_or_not VARCHAR(10000) NOT NULL,
	host_description VARCHAR(10000) NOT NULL,
	host_contact_host VARCHAR(10000) NOT NULL,
	policies VARCHAR(10000) NOT NULL,
	cancellation VARCHAR(10000) NOT NULL
);

CREATE TABLE IF NOT EXISTS listings (
	id SERIAL PRIMARY KEY NOT NULL,
	url VARCHAR(10000) NOT NULL,
	listing_title VARCHAR(10000) NOT NULL,
	city_location VARCHAR(10000) NOT NULL,
	room_specifics VARCHAR(10000) NOT NULL,
	superhost_or_not VARCHAR(10000) NOT NULL,
	description VARCHAR(10000) NOT NULL,
	contact_host VARCHAR(10000) NOT NULL,
	amenities VARCHAR(10000) NOT NULL,
	sleep_arrange VARCHAR(10000) NOT NULL,
	access VARCHAR(10000) NOT NULL,
	reviews VARCHAR(10000) NOT NULL,
	price VARCHAR(10000) NOT NULL,
	host_id INTEGER REFERENCES host_info(id)
);
