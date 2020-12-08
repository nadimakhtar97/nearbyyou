const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.addStore = (req, res) => {
    res.json({name:"nadim Akhtar"});
}

exports.createStore = async ( req,res) => {
    console.log('yes this is store')
    console.log(req.body);
    // req.body.author = req.user._id;
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
    console.log(store);
    res.send(store);
}

exports.updateStore = async (req,res) => {
    req.body.location.type.default = 'Point';
    const store = await Store.findOneAndUpdate({_id:req.params.id},req.body,{
        new : true,
        runValidators:true
    }).exec();
    console.log(store);
    res.send(store);
}

exports.getStoreBySlug = async (req,res,next)=>{
    // res.send("it works")
    const store = await Store.findOne({slug : req.params.slug});
    console.log(store);
    res.send(store);
    if(!store)
    {
        return next();
    }
}

exports.getStoresByTag = async (req, res) => {
    const tag = req.params.tag;
    const tagQuery = tag || { $exists: true, $ne: [] };

    const tagsPromise = await Store.getTagsList();
    console.log(tagsPromise)
    const storesPromise = Store.find({ tags: tagQuery });
    const [tags, stores] = await Promise.all([tagsPromise, storesPromise]);

};

exports.mapStores = async (req,res) =>
{
    const coordinates = [req.body.lng,req.body.lat].map(parseFloat);

    const q= {
        location:{
            $near:{
                $geometry:{
                    type:'Point',
                    coordinates:coordinates
                },
                $maxDistance:10000
            }
        }
    }

    const store = await Store.find(q).select('slug name description location').limit(10);

    res.send(store )

}
