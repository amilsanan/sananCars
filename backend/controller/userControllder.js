const UserCredential = require("../model/userCredentialModel")

const getAllUsers = async (req, res) => {
    try {
        const users = await UserCredential.find();
        res.json(users)
    } catch (error) {
        console.log(error.message);

    }
}

const updatePassword = async (req, res) => {
    console.log("Hi", req.body)
    try {
    const filter = { phone: req.body.phoneNo };
    const update = { $set: { password: req.body.password} }; // Replace with actual field and value to update

        // await UserCredential.find({phone:req.body.n}) .then((response) => {
        await UserCredential.updateMany(filter, update) .then((response) => {
            res.send(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteUser = async (req, res) => {
    console.log("Hi", req.query.id);
    const userID = req.query.id;
    try {
        await UserCredential.deleteOne({ _id: userID }).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getUserDetails = async (req, res) => {
    const userId = req.query.id;
    try {
        await UserCredential.findOne({ _id: userId }).then((response) => {
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getEditProfile = async (req, res) => {
    const userId = req.query.userid;
    const imageurl = req.query.imageurl;
    console.log("req.query", req.query);
    console.log("userId", userId);
    console.log("imageurl", imageurl);
    try {
        await UserCredential.updateOne(
            { _id: userId },
            {
                $set: {
                    image:imageurl
                }
            }
        ).then((response) => {
            console.log("responses",response);
            res.json(response)
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUserDetails,
    getEditProfile,updatePassword
}