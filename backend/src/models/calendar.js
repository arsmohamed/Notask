/*
    this area so we create the models for each route that will be 
    called in the server so the info will get access in the server route
    to link the calendar events with the user we will store the id of the 
    user who created the event
*/
 
const mongoose = require('mongoose')
   
const Calendar = mongoose.model('CalendarEvents', {
    id: {
        type: String, 
        // required: true
    },
    title: {
        type: String, 
        // required: true
    },
    description: {
        type: String, 
        // required: true
    },
    url: {
        type: String 
    },
    start: {
        type: String, 
        // required: true
    },
    end: {
        type: String, 
        // required: true
    },
    daysOfWeek: {
        type: String, 
        // required: true
    },
    display: {
        type: String, 
        // required: true
    },
    textColor: {
        type: String, 
        // required: true
    }, 
    //this where the idea of the user will be saved
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users' //this is used as a reference so we get access to the whole user profile 
    }
})

module.exports = Calendar