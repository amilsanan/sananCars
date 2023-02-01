const UserCredential = require("../model/userCredentialModel");
const jwt  = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const { otpVerify } = require("../verify/otp");

const usersignUp = async (req, res) => {
    console.log('kkkk',req.body);
    let { name, email, password,phone } =await req.body;
    console.log(req.body.phone,req.body.otp);
    // return new Promise((resolve, reject) => {
        otpVerify(req.body.otp,req.body.phone).then(async(resp)=>{
            console.log('sdd===>>',res);
            if (resp){
                console.log('res is true')
                const newUser = new UserCredential({
                    name,
                    email,
                    password,
                    phone
                })
                await newUser.save();
                res.json({ status: "success" });

            }
            else{
                console.log('res is false')
                res.json({ status: "failure" });
            }
        })
    // })
    const validPassword = await bcryptjs.compare('kk',req.body.password);
    console.log(validPassword);


    // try {
    //     if(!username&&!fname&&!email){
            
    //         res.json({data:"no user"})
    //     }
    //     else{
    //         await newUser.save();
    //     console.log("vjhdvchj");
    //     const token = jwt.sign({
    //         email: email
    //     },
    //     'secret123'
    //     )
    //     console.log("vjhdvchj");
    //     res.status(201).json({newUser,token});
    //     }
        
    // } catch (error) {
    //     res.status(409).json({ message: error.message })
    // }
}

const userlogin = async (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
     password = await bcrypt.hash(password,10)
    try {
        const user = await UserCredential.findOne({ email: email });
        console.log("server", user);
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                console.log("Correct Password",user);
                const token = jwt.sign({
                    id: user._id,
                    email: user.email
                },
                'secret123'
                )
                res.status(201).json({user,token});
            } else {
                console.log("Password Wrong");
            }
        } else {
            console.log("Invalid Details");
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const auth =async (req,res)=>{
    console.log("hi");
}

module.exports = {
    usersignUp,
    userlogin,
    auth
}