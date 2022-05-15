const Order=require('../Models/orders.js');

module.exports.addOrder = (req, res, next) => {
    console.log(req.body);
    Order.create({
        clientName: req.body.clientName,
        finalTerm:req.body.finalTerm,
        piecesOfFurniture:req.body.piecesOfFurniture,
        furnitureType:req.body.furnitureType,
    })
    .then(dbOrder => {
        if (!dbOrder) {
            return res.status(404).json({message: "order not added"});
        } else {

            res.status(200).json({message: "order added"});
        }

    })
    .catch(err => {
        console.log('error', err);
    });
};