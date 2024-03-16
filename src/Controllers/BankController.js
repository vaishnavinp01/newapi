const Bank = require("../Models/BankSchema")

exports.addAccount = async (req, res) => {
    try {
        const result = await Bank.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.allAccount = async (req, res) => {
    try {
        const result = await Bank.find({}, "AccountBalance HolderName")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.checkBalance = async (req, res) => {
    try {
        const result = await Bank.findOne({ _id: req.body.accid }, "AccountBalance HolderName")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const result = await Bank.findByIdAndDelete(req.body.accid)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
