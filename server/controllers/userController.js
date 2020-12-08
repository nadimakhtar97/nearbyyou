const mongoose = require('mongoose');
const {body, validationResult} = require('express-validator');
const User = mongoose.model('User');


exports.register = (req, res, next) => {
    const user = new User({email: req.body.email, name: req.body.name});
    User.register(user, req.body.password, function (err, user) {

        if (err)
            console.log(err);
        else
            console.log('register successful');
    })
    next();

}


// registration form validation l-23

// exports.validateRegister = (req, res,next) => {
//     body('name').is
//     req.checkBody('name','you must supply an name!').notEmpty();
//     req.checkBody('email','you must supply an email').notEmpty();
//
//
// }




