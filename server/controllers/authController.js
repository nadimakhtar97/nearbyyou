const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose')
const User = mongoose.model('User');
const Store = mongoose.model('Store')

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Failed Login!',
    successRedirect: '/',
    successFlash: 'You are now Logged In'
}, function (err, result) {
    if(err)
        console.log(err);
    else
         if(result)
             console.log('login successful');
         else
             console.log('login failed!')
});


exports.logout = (req,res)=> {
    req.logout();
    res.send({logout:true});
}


exports.isLoggedIn = (req,res,next)=> {
    if(req.isAuthenticated())
    {
        next();
        return;
    }
    req.send({authenticated:false});
}

exports.forgot = async (req,res)=> {
    console.log(req.body.email)
    const user = await User.findOne({ email : req.body.email });
    console.log(user);

    if(!user)
    {
        res.send('no user found with given email address');
    }

    user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordTokenExpires = Date.now() + 3600000 ;
    await user.save();
    const resetURL = `http://${req.headers.host}/forgot/reset/${user.resetPasswordToken}`;

    res.send(resetURL);

}

exports.reset = async (req,res) => {
    const user = await User.findOne({
        resetPasswordToken : req.params.token,
        resetPasswordTokenExpires : { $gt : Date.now() }
    })

    if(!user)
    {
        res.send("Password Reset Link is Invalid or Expired");
    }

    res.send('reset password form');
}

exports.confirmedPasswords = (req,res,next) => {

    if(req.body.password === req.body.confirmPassword)
    {
        next();
        return ;
    }

    res.send('password do not match ')
}


exports.updatePassword = async (req,res,next) =>
{
    const user = await User.findOne({
        resetPasswordToken : req.params.token,
        resetPasswordTokenExpires : { $gt : Date.now() }
    })

    console.log(user);

    if(!user)
    {
        res.send("Password Reset Link is Invalid or Expired");
        return;
    }

    await user.setPassword(req.body.password);
    user.resetPasswordToken= undefined;
    user.resetPasswordTokenExpires = undefined;
    const updatedUser = await user.save();
    await req.login(updatedUser);
}
