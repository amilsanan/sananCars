const express = require('express');
const { usersignUp, userlogin, auth } = require('../controller/loginController');

const { getUserDetails, getEditProfile } = require('../controller/userControllder');
const { doSms,otpVerify } = require('../verify/otp');
const router = express.Router();

router.post('/signup',usersignUp);
router.post('/otp',doSms)
router.post('/login',userlogin);
router.get('/login',auth)
router.get('/getUserDetails',getUserDetails)
router.get('/editProfilePic',getEditProfile)

module.exports = router;