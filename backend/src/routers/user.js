const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router() 
const sgMail = require('@sendgrid/mail') 

const sendgridAPIKey= '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'
sgMail.setApiKey(sendgridAPIKey)


//SignUp
router.post("/Users", async (req, res) => {
  const user = new User(req.body); //take the info from the website and then save it in user
  //saving the info to the database and see if will match the info in the model or not
  try{
    // console.log(res.body.email)
    // sgMail.send({
    //     to: res.body.email,
    //     from: 'kirito21596@gmail.com',
    //     subject: 'Thanks for joining in!',
    //     // text: `Welcome to the app, ${res.body.firstName} ${res.body.lastName}. Let me know how you get along with the app.`,
    //     html: `Welcome to the app, ${res.body.firstName} ${res.body.lastName}. Let me know how you get along with the app.`,
    //     // html: '<body>
    //     //           <p><strong>Welcome to the app</strong> <var>{res.body.firstName}</var><var>{res.body.lastName}.</var><strong>Let me know how you get along with the app</strong></p>
    //     //       </body>'
    // })
    // console.log(user.email, user.firstName, user.lastName)
    await user.save();
    /*
    *  Creating a function that we can reuse whenever we want to generate an authentication 
    *  token for a given user where it will be called in user model
    */
    const token = await user.generateAuthToken()
    res.status(201).send({ user , token });
  }catch(e){
    res.status(400).send(e)
  } 
});
//SignIn
router.post("/Users/login", async (req, res) => {
  
  try{
    //requesting email and password from User . findByCredentials and then return them back 
    const user = await User.findByCredentials(req.body.email, req.body.password)
    /*
    *  Creating a function that we can reuse whenever we want to generate an authentication 
    *  token for a given user where it will be called in user model
    */
    const token = await user.generateAuthToken()
    res.send({ user , token}); //using curly braces to send two or more properties
  }catch(e) {
    res.status(400).send()
  }

})
//Logout
router.post("/Users/logout", auth , async (req,res) => {
  
  try{
    //this to logout from one machine 
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send("now you are logged out ")
  } catch (e) {
    res.status(500).send()
  }

})
//Logout from all
router.post("/Users/logoutAll", auth , async (req,res) => {
  
  try{
    //this to logout from all machine 
    req.user.tokens = [] //return empty array for that user 
    await req.user.save()
    res.status(200).send("now you are logged out from all machines ")
  } catch (e) {
    res.status(500).send()
  }

})
//For user profile profile 
router.get("/Users/me", auth , async (req, res) => {
  //return the information about the user when they are authenticated 
  res.send(req.user) 
});

module.exports = router