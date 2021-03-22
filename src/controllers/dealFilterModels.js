const db = require("../../config/db")

exports.getModels = (req,res,next)=>{
    let brandName= req.query.brandName
    if (brandName ==='samsung'){
      res.status(200).json(db.modelDetails.samsung)
    }else if(brandName ==='apple'){
      res.status(200).json(db.modelDetails.apple)
    }else{
      res.status(404).json("No Models Found in Database!")
    }
}