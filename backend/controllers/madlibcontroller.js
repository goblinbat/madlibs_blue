const router = require('express').Router();
const sequelize = require('../db');
const Madlib = sequelize.import('../models/madlib');

// gets all of a user's madlibs
router.get('/', (req, res) => {
    Madlib.findAll({where: {owner: req.user.id}})
    .then(ml => res.status(200).json(ml))
    .catch(err => res.status(500).json({error: err}))
});

// create madlib
router.post('/', (req, res) => {
    const filledML = {
        keyphrase: req.body.keyphrase,
        owner: req.user.id,
        savedAs: req.body.savedAs,
        noun1: req.body.noun1,
        noun2: req.body.noun2,
        noun3: req.body.noun3,
        noun4: req.body.noun4,
        adj1: req.body.adj1,
        adj2: req.body.adj2,
        adj3: req.body.adj3,
        adj4: req.body.adj4,
        adj5: req.body.adj5,
        adj6: req.body.adj6,
        verb1: req.body.verb1,
        verb2: req.body.verb2,
        verb3: req.body.verb3,
        verb4: req.body.verb4,
        verb5: req.body.verb5,
        adverb: req.body.adverb,
        famMem1: req.body.famMem1,
        famMem2: req.body.famMem2,
        famMem3: req.body.famMem3,
        PTverb1: req.body.PTverb1,
        PTverb2: req.body.PTverb2,
        quote: req.body.quote,
        PLnoun1: req.body.PLnoun1,
        PLnoun2: req.body.PLnoun2,
        PLnoun3: req.body.PLnoun3,
        PLnoun4: req.body.PLnoun4,
        ingVerb: req.body.ingVerb,
        liquid: req.body.liquid,
        container: req.body.container,
        vehicle: req.body.vehicle,
        occupation: req.body.occupation,
        food1: req.body.food1,
        food2: req.body.food2,
        building: req.body.building,
        number1: req.body.number1,
        number2: req.body.number2,
        number3: req.body.number3,
        number4: req.body.number4,
        room: req.body.room,
        animal: req.body.animal,
        shape: req.body.shape,
        bodypart: req.body.bodypart,
        name: req.body.name,
        location: req.body.location
    }
    Madlib.create(filledML)
    .then(ml => res.status(200).json(ml))
    .catch(err => res.json({error: err}))
})

// get single madlib
router.get('/:id', (req, res) => {
    Madlib.findOne({where: {id: req.params.id}})
    .then(ml => res.status(200).json(ml))
    .catch(err => res.status(500).json({error: err}))
})

// delete madlib
router.delete('/:id', (req, res) => {
    Madlib.destroy({where: {id:req.params.id}})
    .then(ml => res.status(200).json(ml))
    .catch(err => res.json({error: err}))
})

module.exports = router