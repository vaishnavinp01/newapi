const express = require("express")
const router = express.Router()

const UserController = require("../Controllers/UserController")

router.post("/adduser", UserController.addUser)
router.get("/allusers", UserController.allUsers)
router.put("/updateuser", UserController.updateuser)


const BankController = require("../Controllers/BankController")

router.post("/addaccount", BankController.addAccount)
router.get("/allaccounts", BankController.allAccount)
router.post("/checkbalance", BankController.checkBalance)
router.delete("/deleteaccount", BankController.deleteAccount)

module.exports = router