const express = require("express")
const router = express.Router()

const UserController = require("../Controllers/UserController")

router.post("/adduser", UserController.addUser)
router.get("/allusers", UserController.allUsers)


module.exports = router