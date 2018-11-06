\c airbnb

CREATE TABLE IF NOT EXISTS listing (
	id SERIAL PRIMARY KEY NOT NULL,
	url VARCHAR(255),
	listing_title TEXT NOT NULL,
	city_location TEXT NOT NULL,
	room_specifics TEXT NOT NULL,
	superhost_or_not TEXT NOT NULL,
	description TEXT NOT NULL,
	contact_host TEXT NOT NULL,
	ammenities TEXT NOT NULL,
	sleep_arrange TEXT NOT NULL,
	access TEXT NOT NULL,
	reviews TEXT NOT NULL,
	price TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS host_info (
	id SERIAL PRIMARY KEY NOT NULL,
	title TEXT NOT NULL,
	city_location TEXT NOT NULL,
	date_joined TEXT NOT NULL,
	superhost_or_not TEXT NOT NULL,
	description TEXT NOT NULL,
	contact_host TEXT NOT NULL,
	policies TEXT NOT NULL,
	cancellation TEXT NOT NULL
);