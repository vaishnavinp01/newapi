const User = require("../Models/UserSchema")

//add user operation
exports.addUser = async (req, res) => {
    try {
        const result = await User.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

//find all users operations
exports.allUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateuser = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(
            req.body.userid,
            { UserMobNo: req.body.UserMobNo },
            { new: false })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}