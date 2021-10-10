/*
    * using middleware which allow us to do something between requestin and running the route handler
        with middleware : new request -> do something -> run route handler 
        method is used for {Get, Post, Patch< Delet}
        path is used for { the link or route that the user is trying to get access to }
    * we have to run next so the route handler can run 
    * Import the Token so we can valildate the token that
         is coming from the user and compare it with the data base from the user model 
*/
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async ( req, res, next) => {
    try {  
        //requesting the header token from the user who is called then , Replacing Bearer with nothing8 
        const token = (req.path === "/Users/logout") ? req.body.headers.Authorization : req.header('Authorization').replace('Bearer ', '')
        //making sure that the token is valid and created by the server 
        const decoded = jwt.verify(token, 'MyFirstWebApplication')
        //now we are looking for the user with that token id and then confirm that the token is the same 
        const user = await User.findOne({ _id:  decoded._id, 'tokens.token': token })
        //if the user in not that then catch method would be tragered 
        if(!user) {
            throw new Error()
        }
        //if the user was found
        req.token = token //now we have access to the token of the user  
        req.user = user //now we have acess to the user that was fitched from the database 
        next() // running the coding to return to what the route should do 
    }catch (e) {
        res.status(401).send({ error : 'Please Authenticate'})
    } 
}


module.exports = auth