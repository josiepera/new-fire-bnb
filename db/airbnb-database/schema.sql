\c airbnb

CREATE TABLE IF NOT EXISTS listings (
	id SERIAL PRIMARY KEY NOT NULL,
	url VARCHAR(255) NOT NULL,
	listing_title VARCHAR(255) NOT NULL,
	city_location VARCHAR(255) NOT NULL,
	room_specifics VARCHAR(255) NOT NULL,
	superhost_or_not VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	contact_host VARCHAR(255) NOT NULL,
	ammenities VARCHAR(255) NOT NULL,
	sleep_arrange VARCHAR(255) NOT NULL,
	access VARCHAR(255) NOT NULL,
	reviews VARCHAR(255) NOT NULL,
	price VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS host_info (
	id SERIAL PRIMARY KEY NOT NULL,
	title VARCHAR(255) NOT NULL,
	city_location VARCHAR(255) NOT NULL,
	date_joined VARCHAR(255) NOT NULL,
	superhost_or_not VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	contact_host VARCHAR(255) NOT NULL,
	policies VARCHAR(255) NOT NULL,
	cancellation VARCHAR(255) NOT NULL
);