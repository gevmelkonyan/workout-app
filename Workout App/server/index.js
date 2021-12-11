// expres is an instance of the express framework
// app is an instance of express
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');

app.use(express.json());
app.use(cors());

// *********ROUTERS************
const workoutsRouter = require('./routes/workouts');
app.use("/workouts", workoutsRouter);

const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);


// makes sure specified tables from models are in our database and if not, creates those tables
// in config/config.json, developement code is where you change to allow the code to know what database to create these tables
db.sequelize.sync().then( () => {
    //entrypoint of api, whenever we want to start running the app
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});