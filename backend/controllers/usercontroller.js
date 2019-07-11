// update and delete user
// i guess view user also goes in here

const router = require('express').Router();
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');

// get the user 
router.get('/:username', (req, res) => {
    User.findOne({where: {username: req.params.username}})
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json({error:err}))
})

// update 
router.put('/:id', (req, res) => {
    const username = req.body.user.username;
    const email = req.body.user.email;
    const password = req.body.user.password;
    const profile = req.body.user.profile;

    User.update({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 10),
        profile: profile
    }, {where: {id: req.params.id}})
    .then(user => res.status(200).json(user))
    .catch(err => res.json({error: err}))
})

// delete
router.delete('/:id', (req, res) => {
    User.destroy({where: {id: req.params.id}})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.json({error: err}))
})

module.exports = router