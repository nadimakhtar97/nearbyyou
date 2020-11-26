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

exports.getStores = async (req,res)=> {
    const stores = await Store.find();
    console.log(stores)
    res.send(stores);
}


exports.editStore = async (req,res) => {
    const store = await Store.findOne({_id:req.params.id});
    console.log(store)
    res.send(store)
}
