const express = require('express');
const { usersignUp, userlogin, auth } = require('../controller/loginController');

const { getUserDetails, getEditProfile,updatePassword } = require('../controller/userControllder');
const { doSms,otpVerifys } = require('../verify/otp');
const router = express.Router();

router.post('/signup',usersignUp);
router.post('/otp',doSms)
router.post('/otpverifys',otpVerifys)
router.post('/login',userlogin);
router.post('/updatePass',updatePassword);
router.get('/login',auth)
router.get('/getUserDetails',getUserDetails)
router.get('/editProfilePic',getEditProfile)

module.exports = router;