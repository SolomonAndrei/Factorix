const Material=require('../Models/materials.js');

module.exports.addMaterial = (req, res, next) => {
    console.log(req.body);
    Material.create({
        name: req.body.name,
        quantity:req.body.quantity,
        colour:req.body.colour,
        userid:req.body.userid,
    })
    .then(dbMaterial => {
        if (!dbMaterial) {
            return res.status(404).json({message: "material not added"});
        } else {

            res.status(200).json({message: "material added"});
        }

    })
    .catch(err => {
        console.log('error', err);
    });
};