const express = require('express');
const router = require('express').Router();

const usersController = require('../controllers/users');

router.get('/', (req, res) => { res.send('Hello World'); });

router.use('/users', require('./users'));

module.exports = router;


