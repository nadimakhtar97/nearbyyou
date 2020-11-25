const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.addStore = (req, res) => {
    res.json({name:"nadim Akhtar"});
}

exports.createStore = async ( req,res) => {
    console.log('yes this is store')
    console.log(req.body);
    const store = new Store(req.body);
    await store.save();
    res.redirect('/');

}
