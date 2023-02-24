const express = require('express');
const { adminLogin } = require('../controller/adminLoginController');
const { getAllUsers, deleteUser } = require('../controller/userControllder');
const adminrouter = express.Router();
const { addCompanies,getCompanies,addCars, getCars } = require('../controller/companyManagment');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })




adminrouter.post('/adminlogin',adminLogin);
adminrouter.post('/addCompanies',addCompanies);
adminrouter.post('/addCars',addCars);
adminrouter.get('/getCars',getCars);
adminrouter.get('/getUsers',getAllUsers);

adminrouter.post('/userDelete',deleteUser)
adminrouter.get('/getCompanies',getCompanies)

module.exports = adminrouter;