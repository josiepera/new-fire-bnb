
# squad-airbnb

# ![](https://www.logodesignlove.com/images/identity/airbnb-logo-meaning.jpg)

# Project Overview
For our Unit 3 project, we are working in a group format to recreate the Airbnb Official Site. For our technologies, we are using HTML, CSS, Bootstrap, and React for the Front-End development, and on the backend, we used Express.js, PostgreSQL, Postman, and Postico to build the server and database.


## Project Description

The React web application will include the AirBnb's home page which will include a search form and navigation routing bar. There will be various routes that the user can take to search listings in New York as well as single listing to view.


## Project Schedule

|  Day   | Deliverable          | Status
|--------|----------------------| ----------|
|Nov 5th | Project Description  | Complete
|Nov 5th | Wireframes / Priority Matrix | Complete
|Nov 6th | Core Application Structure   | Complete
|Nov 7th | Pseudocode / actual code | Complete
|Nov 8th | Initial Clickable Model  | Complete
|Nov 9th | MVP | Complete
|Nov 10th| MVP | Complete
|Nov 11th| Post-MVP| Complete
|Nov 12th| Post-MVP | Complete
|Nov 13th| Present | Incomplete


## Wireframes

Priority Matrix:
https://res.cloudinary.com/div3mompi/image/upload/v1541434083/MVP_PMVP_Priority_Matrix.jpg

Wireframes:
https://res.cloudinary.com/div3mompi/image/upload/v1541432956/Wireframes.jpg

Tables:
https://res.cloudinary.com/div3mompi/image/upload/v1541432951/Tables.jpg

Location Constraints:
https://res.cloudinary.com/div3mompi/image/upload/v1541432942/Location_Contraints.jpg

ERD Tables:
https://res.cloudinary.com/div3mompi/image/upload/v1541437548/ERD_tables.jpg

App Structure:
https://res.cloudinary.com/div3mompi/image/upload/v1541438623/App_Structure.jpg


## Priority Matrix

In order of priority:

- Pages Layout - 12 hours
- Server setup - 4 hours
- MVC - 12 hours
- Styles - 4 hours
- Database - 4 hours
- Tables - 4 hours
-------
- Total: 40 hours for MVP

- Advanced Styles - 4 hours
- Auth - 4 hours
- User login - 4 hours
- User database - 4 hours
- Faves - 4 hours
-----------
- Total: 20 hours for post-MVP


#### MVP

- Pages Layout
- Server setup
- MVC
- Styles
- DB and tables

#### PostMVP

- Styles
- Auth and user db
- Faves
- Filters


## Functional Components

### Data Fetch

componentDidMount() {
  axios.get(airbnbdata)
    .then(store in state as json obj)
    }

### Data Render

renderData() {
if (data is in state) {
this.state.data.map( (d,i) => {
render the data and pass it as props
  }
}

## Timetable

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: |  :-----------: | :------------: | :---------: |
| Home page    | H  | 4hrs | 4hrs | 4hrs  |
| Header w/ Links   | H  | 2hrs | 2hrs | 2hrs  |
| Listings Components | H | 4hrs | 4hrs | 4hrs |
| Booking | H | 2hrs | 2hrs | 2hrs |
| SingleList | H | 4hrs | 8hrs |  8hrs |
| SingleList Sticky Footer | H | 4hrs | 3hrs  | 3hrs |
| SingleList Sticky Form | H | 4hrs | 4hrs | 4hrs |
| ReactStrap | L | 4hrs | 4hrs |  4hrs |
| MapBox API | L | 4hrs | 2hrs | 2hrs |
| Form Component | H | 4hrs | 4hr | 4hr |
| Server Setup | H  | 4hrs| 2hr | 2hr |
| Basic Styles | H  | 4hrs| 4hr | 4hrs|
| Adv Styles | H  | 4hrs| 6hrs | 6hrs |
| Routes | H | 4hrs | 2hr | 2hr |
| Model | H | 4hrs | 9hrs| ?
| Controller | H | 4hrs | 9hrs | ?
| DB and Tables | H  | 4hrs | 6hrs | 6hrs
| Auth / login  | M  | 4hrs | ?  | ?
| User db       | M  | 4hrs | ?  |  ?
| Faves        | L  | 4hrs | ? | ?
| Filters | L | 4hrs | ? | ?
| Project Management | H | 8hrs | 4hrs | ?


## Database and Tables

1 Database with 2 tables

Table 1  -  Listings
|img|listtitle|citylocale|roomspecs|superhost?|desc|contact|amenities|sleeparange|access|available|reviews|price|

Table 2 - Host info
|title|citylocale|datejoined|superhost?|desc|contact|policies|cancel|
