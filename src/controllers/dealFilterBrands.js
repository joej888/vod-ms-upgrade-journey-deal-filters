const db = require("../../config/db")

exports.getBrands = (req,res,next)=>{
    res.status(200).json(db.brandDetails);
}