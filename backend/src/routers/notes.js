const express = require("express");
const Note = require("../models/notes");
const auth = require('../middleware/auth'); 
const router = new express.Router();

router.post('/Notes',auth , async (req, res) => {
  /*
    take the info from the website and then save it in user
    This way the notes that will be created will be owned by a user
  */
  const note = new Note({
    ... req.body,
    owner : req.user._id // passing down the user id to the Created now as we created that section in the model
  }) 
  try{
    await note.save();
    res.status(201).send(note)
  }catch(e){
    res.status(400).send(e)
  }
});

router.get('/Notes',auth , async (req, res) => {

    try{
      //this is to make sure that the notes is returned is from the same user 
        // await Note.populate('owner').execPopulate()
        const note = await Note.find({owner: req.user._id}); //we can add the name of the note we are looking for inside the {}
        res.send(note)
    }catch(e){
        res.status(500).send(e)
    }
});

router.patch ('/Notes/:id',auth , async (req, res) => {

  try{
    const note = await Note.findByIdAndUpdate(
        req.params.id, req.body, {new: true, runValidators: true, deprecated: false}
      ); 
    //no note
    if (!note) {
      return res.status(404).send("Note is not here")
    }
    await note.save()
    res.send(note)
  }catch(e){
    res.status(400).send(e)
  }
});

router.delete('/Notes/:id',auth , async (req, res) => {
 try{
    const note = await Note.findByIdAndDelete({ _id: req.params.id, owner: req.user._id}); 

    if (!note) {
      return res.status(404).send()
    }

    res.send(note)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router;