const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    UserName: String,
    UserEmail: String,
    UserPassword: String,
    UserMobNo: Number
})

module.exports = mongoose.model("User", UserSchema)

// {
//     "UserName": "ashish",
//     "UserEmail": "askdjk#zjsjdk",
//     "UserPassword": "asjda",
//     "UserMobNo": 45454
// }