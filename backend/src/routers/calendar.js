const express = require("express");
const CalendarEvents = require("../models/calendar");
const auth = require('../middleware/auth'); 
const router = new express.Router();

//Creating Calendar Event
router.post('/Calendar',auth, async (req, res) => {
    /*
        take the info from the website and then save it in user
        This way the notes that will be created will be owned by a user
    */
    const calendarEvents = new CalendarEvents({
        ... req.body,
        owner : req.user._id // passing down the user id to the Created now as we created that section in the model
    }) 
    try{
        await calendarEvents.save();
        res.status(201).send(calendarEvents);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get('/Calendar',auth , async (req, res) => {
    try{
        // await req.user.populate('calendarEvent').execPopulate()
        const calendarEvents = await CalendarEvents.find({owner: req.user._id}); //we can add the name of the note we are looking for inside the {}
        res.send(calendarEvents) 
    }catch(e){
        res.status(500).send(e);
    } 
});

router.patch ('/Calendar/:id',auth , async (req, res) => {
    try{
      // const calendar = await CalendarEvents.findOne({ _id: req.params.id, owner: req.user._id}); 
      const calendar = await CalendarEvents.findByIdAndUpdate(
          req.params.id, req.body, {new: true, runValidators: true, deprecated: false}
        ); 
      //no calendar
      if (!calendar) {
        return res.status(404).send()
      }
      await calendar.save()
      res.send(calendar)
    }catch(e){
        res.status(400).send(e)
    }
  });

  router.delete('/Calendar/:id', auth , async (req, res) => {
    try{
      const calendar = await CalendarEvents.findByIdAndDelete({ _id: req.params.id, owner: req.user._id});   
      if (!calendar) {
        return res.status(404).send()
      }

      res.send(calendar)
    } catch (e) {
      res.status(500).send()
    }
  })

module.exports = router;
