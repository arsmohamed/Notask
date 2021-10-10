/*
    this area so we create the models for each route that will be 
    called in the server so the info will get access in the server route

    to link the notes events with the user we will store the id of the 
    user who created the event
*/
const mongoose = require('mongoose')
   
const NoteSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    //this where the idea of the user will be saved
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users' //this is used as a reference so we get access to the whole user profile 
    }
})


const Note = mongoose.model('Note', NoteSchema)

module.exports = Note