/*
    this area so we create the models for each route that will be 
    called in the server so the info will get access in the server route

    The second argument of the mongoose model is turned to be the schema that 
    medware uses to for the backend 
*/
 
const mongoose = require('mongoose')
const validator = require('validator') 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName: {
    type: String, 
    required: true,
    trim: true
    },
    lastName: {
        type: String, 
        trim: true,
        required: true,
    },
    userName: {
        type: String, 
        trim: true,
        required: true,
    },
    email: {
        unique: true, //to make sure there is no repeated email
        type: String, 
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
            }
        },
        trim: true
    },
    password: {
        type: String, 
        required: true,
        min: 8,
        // validate(value) {
        //   if(!validator.isStrongPassword(value)){
        //     throw new Error('Password is not strong')
        //   }  
        // },
        trim: true,
    },
    country: {
        type: String, 
        trim: true,
        required: true,
    },
    province: {
        type: String, 
        trim: true,
        required: true,
    },
    city: {
        type: String, 
        trim: true,
        required: true,
    },
    ZipCode: {
        type: String, 
        required: true,
        trim: true,
        min: 5,
    },
    /*  this to allow users to login and logout from different machines using array of objects
        it an array of objects each has  a token propirty which is the token we are tracking  
    */
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
})
/*
    creatinga a virtual copy of the  notes for each user 
*/
userSchema.virtual('notes', {
    ref: 'Note',
    localField: '_id',
    foreignField: 'Owner'
})
/*
    creatinga a virtual copy of the calendar events  for each user 
*/
userSchema.virtual('calendarEvent', {
    ref: 'CalendarEvents',
    localField: '_id',
    foreignField: 'Owner'
})
/*
    Using toJSON will help returning the user object without the deleted info  

    this way is better than creating a method and it will work on all routs but if a method was 
    to be created then we have to mention at which route we are using it 
*/
userSchema.methods.toJSON = function () {
    const user = this 
    const userObject = user.toObject() //having access to the userObjects and modify it 
    delete userObject.password //This will help deleting the information about the user's password
    delete userObject.tokens  //This will help deleting the information about the user's tokens 

    return userObject //returning the new userobject without the the deleted info
}
/*
    Create a generateAuthToken so we can check if the user has been logged in before or not 
    we are going to use Function so we can use "this" and that will help binding 
*/
userSchema.methods.generateAuthToken = async function () {
    const user = this 
    //gerenating jwt 
    const token = jwt.sign({ _id: user._id.toString() }, 'MyFirstWebApplication')
    //now add that toke to the token propirty and added to user to be show in the database  
    user.tokens = user.tokens.concat({ token : token })
    //saving the token to the database 
    await user.save()
    
    return token

}

//Created a findByCredentials so we can check if the user loggedin with the same credential that we have
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email }); //Searching user in monogoos to check if the email is there or not 
    if (!user) {
        throw new Error('Unable to login em')
    }
    
    //The first argument is the text password and the second is the hashed one to compare them 
    const isMatch = await bcrypt.compare( password, user.password)
    
    if (!isMatch) {
        throw new Error('Unable to login pa')
    }

    return user
}

/*
    we are using function here becasue arrow function dont bind 
    We call next after we are done in the function and what it needs to do 
*/
userSchema.pre('save', async function (next) {
    //this give us acces to the user that is about to be saved 
    const user = this
    
    //Here we will be hashing the password
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User