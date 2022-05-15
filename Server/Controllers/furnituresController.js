const Furniture=require('../Models/furnitures.js');

module.exports.addFurniture = (req, res, next) => {
    console.log(req.body);
    Furniture.create({
        name: req.body.name,
        quantity:req.body.quantity,
        duration:req.body.duration,
        userid:req.body.userid,
        volume:req.body.volume,
        costOfMaterials:req.body.costOfMaterials,
        materialType:req.body.materialType,
    })
    .then(dbFurniture => {
        if (!dbFurniture) {
            return res.status(404).json({message: "furniture not added"});
        } else {

            res.status(200).json({message: "furniture added"});
        }

    })
    .catch(err => {
        console.log('error', err);
    });
};