# squad-airbnb

# Project Overview


## Project Description

We rebuilt the Airbnb site with React. We used Express for our server and PostgreSQL for our database.


## Project Schedule

|  Day   | Deliverable          | Status
|--------|----------------------| ----------|
|Nov 5th | Project Description  | Complete
|Nov 5th | Wireframes / Priority Matrix | Complete
|Nov 6th | Core Application Structure   | Incomplete
|Nov 7th | Pseudocode / actual code | Incomplete
|Nov 8th | Initial Clickable Model  | Incomplete
|Nov 9th | MVP | Incomplete
|Nov 10th| Present | Incomplete


## Wireframes

![wireframe](https://res.cloudinary.com/div3mompi/image/upload/v1541434083/MVP_PMVP_Priority_Matrix.jpg)
![wireframe](https://res.cloudinary.com/div3mompi/image/upload/v1541432956/Wireframes.jpg)
![wireframe](https://res.cloudinary.com/div3mompi/image/upload/v1541432951/Tables.jpg)
![wireframe](https://res.cloudinary.com/div3mompi/image/upload/v1541432942/Location_Contraints.jpg)


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


| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: |  :-----------: | :------------: | :---------: |
| Home page    | H  | 4hrs | ? | ?  |
| Listings page | H | 4hrs | ? | ? |
| Search page | H | 4hrs | ? | ? |
| Server Setup | H  | 4hrs| ? | ? |
| Basic Styles | H  | 4hrs| ? | ? |
| Routes | H | 4hrs | ? | ? |
| Model | H | 4hrs | ? | ?
| Controller | H | 4hrs | ? | ?
| DB and Tables | H  | 4hrs | ? | ?
| Auth / login  | M  | 4hrs | ?  | ?
| User db       | M  | 4hrs | ?  |  ?
| Adv. Styles  | L | 4hrs | ? | ?
| Faves        | L  | 4hrs | ? | ?
| Filters | L | 4hrs | ? | ?


## Database and Tables

1 Database with 3 tables

Table 1  -  Locations 
|img|listtitle|citylocale|roomspecs|superhost?|desc|contact|amenities|sleeparange|access|available|reviews|price|

Table 2 - Host info
|title|citylocale|datejoined|superhost?|desc|contact|policies|cancel|

Table 3 - Listings
|img|listtitle|roomspecs|price|superhost?|cancel|
