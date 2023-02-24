const CompanyCredential= require('../model/addCompanyModel')
const CarCredential= require('../model/carModel')
// const cloudinary = require("../cloudinary")
// const cloudinary = require('cloudinary').v2

// // Configuration 
// cloudinary.config({
//   cloud_name: "ds95de0tj",
//   api_key: "145737747856156",
//   api_secret: "MpBDHH5I2vPg06J_POqXP4Qurx8"
// });


// Upload



const addCompanies = async(req, res) => {
    console.log('yesyes');
//     const respo = cloudinary.uploader.upload(req.files.file, {public_id: "olympic_flag"})

// respo.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });
        try {
            if (!req.files) {
                res.send({
                    status: "failed",
                    message: "No file uploaded",
                });
            } else {
                console.log('this body',req.body);
                console.log('this isit',req.files);
                const company= new CompanyCredential({
                    name:req.body.name,
                    imagename:req.files.file.name,
                })
                await company.save().then((res)=>{
                    console.log('jk',res._id);
                   
                })
                var imgname= req.files.file.name
                var file = req.files.file;
                // const image =await cloudinary.uploader.upload(file,{folder:"images"})
                // console.log('liuop',image); 
    
    
                 file.mv("./frontend/public/images/company/" +imgname);
    
                res.send({
                    status: "success",
                    message: "File is uploaded",
                    
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    }

const getCompanies = async (req,res)=>{
    console.log('get companiesknn');
    try {
        await CompanyCredential.find({}).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}


const addCars =async (req, res) =>{
    // console.log(req.body.data);
    // let file = req.files.file;
    
    console.log('this body',req.body);
    console.log('this isit',req.files);
    
    const company= new CarCredential({
        name:req.body.name,
       
        brand: req.body.brand,
        price: req.body.price,
        year: req.body.year,
        kms: req.body.kms,
        fuel: req.body.fuel,
        regNo:req.body.regNo,
       
        imagename:req.files.image.name,
    })
    await company.save().then((res)=>{
        console.log('jk',res);
       
    })
    var file = req.files.image;
      file.mv("./frontend/public/images/car/" + req.files.image.name);
}

const getCars =async (req,res)=>{
    console.log('get cars');
    try {
        await CarCredential.find({}).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    addCompanies,
    getCompanies,
    addCars,getCars
}

