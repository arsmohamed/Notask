const express = require('express')
require('./db/mongoose')
const UserRouter = require('./routers/user');
const NoteRouter = require('./routers/notes')
const CalendarEventsRouter = require('./routers/calendar');
const cors = require("cors");


const app = express()
//to either have the application run either on hurokuapp or our localhost port 
const port = process.env.PPORT || 9000
//this will help with requesting info from FE
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//this part to customize our server and then change the incoming info to be read using the following command 
//it pasrse our json to an object so we can access in our request handler 
app.use(express.json())
app.use(UserRouter);
app.use(NoteRouter);
app.use(CalendarEventsRouter);

app.listen(port , () => {
    console.log("Server is up and Running on port " + port)
})