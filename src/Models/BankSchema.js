const mongoose = require("mongoose")

const BankSchema = mongoose.Schema({
    HolderName: String,
    AccountType: String,
    AccountBalance: Number,
    AccountNumber: Number
})

module.exports = mongoose.model("Bank", BankSchema)

// {
//     "HolderName": "Ashish",
//     "AccountType": "Saving",
//     "AccountBalance": 3999,
//     "AccountNumber": 1
// }