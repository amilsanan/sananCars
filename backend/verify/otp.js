require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTH); 
const servicesId=process.env.TWILIO_SERVICESID


   const doSms = async (req,res)=>{
        console.log("hhhhh",req.body.number);
        let phone = req.body.number       
        
        return new Promise((resolve,reject)=>{
            console.log('phonw number ---');
 
            client.verify.services(servicesId).verifications.create({
                to:`+91${phone}`,
                channel:'sms'
            }).then((res)=>{
                console.log(res);
                res.valid=true
                resolve(res)
            })
        })
    }
   const otpVerify = (otp,number)=>{
    console.log('asd',otp,number);
        let response
        return new Promise((resolve, reject) => {
            client.verify.services(servicesId).verificationChecks.create({
                to:`+91${number}`,
                code:otp
            }).then((res)=>{
                console.log(res);
                if(res.status === 'approved'){
                    resolve(response=true)
                }else{
                    reject(response=false)
                }
            })
        })
    }
    module.exports =  {
        doSms,
        otpVerify

}