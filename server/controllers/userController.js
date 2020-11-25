const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');


exports.loginForm = (req, res) => {
    res.send('login form');
}

exports.registerForm = (req, res) => {
    res.send('register form');
}



