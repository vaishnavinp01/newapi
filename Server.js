// import packages
const express = require('express')
const bodyparser = require('body-parser')
const cors = require("cors")
const mongoose = require("mongoose")


// create Server
const Server = express()

// set bodyparser
Server.use(bodyparser.json())
Server.use(cors())

//connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/demodb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Connection Fail")
});

Server.get('/', (req, res) => {
    res.send('Hi...')
})

Server.get('/users', (req, res) => {
    const studs = ['Vaishnawi', 'Sanika', 'Ravina']
    res.send(studs)
})

Server.get('/employees', (req, res) => {
    const emps = [{
        empId: 1,
        empName: 'Vaishnawi',
        empSalary: 80000
    }, {
        empId: 2,
        empName: 'Mohini',
        empSalary: 78000
    }, {
        empId: 3,
        empName: 'Lina',
        empSalary: 73000
    }, {
        empId: 4,
        empName: 'Manasi',
        empSalary: 69000
    }]
    res.json(emps)
})

Server.get('/allemployees', (req, res) => {
    const employee = [{
        empId: 1,
        empName: "Vaishnawi",
        empDesig: "Sales",
        empDept: "Account",
        empSalary: 80000
    }, {
        empId: 2,
        empName: "Mohini",
        empDesig: "Sales",
        empDept: "Account",
        empSalary: 78000
    }, {
        empId: 3,
        empName: "Lina",
        empDesig: "Sales",
        empDept: "Account",
        empSalary: 73000
    }, {
        empId: 4,
        empName: "Manasi",
        empDesig: "Sales",
        empDept: "Account",
        empSalary: 69000
    }, {
        empId: 5,
        empName: "Lina",
        empDesig: "Sales",
        empDept: "Account",
        empSalary: 73000
    }, {
        empId: 6,
        empName: "Chetana",
        empDesig: "Sales",
        empDept: "IT",
        empSalary: 73000
    }, {
        empId: 7,
        empName: "Madhuri",
        empDesig: "Sales",
        empDept: "IT",
        empSalary: 73000
    }, {
        empId: 8,
        empName: "Reshma",
        empDesig: "Sales",
        empDept: "IT",
        empSalary: 73000
    }]
    res.json(employee)
})

Server.get('/allproducts', (req, res) => {
    const products = [{
        pId: 1,
        pName: "Laptop",
        pCompany: "Acer",
        pPrice: 50000
    }, {
        pId: 2,
        pName: "Laptop",
        pCompany: "Acer",
        pPrice: 70000
    }, {
        pId: 3,
        pName: "Buds",
        pCompany: "Sony",
        pPrice: 5000
    }, {
        pId: 4,
        pName: "Bluetooth",
        pCompany: "Oppo",
        pPrice: 2000
    }, {
        pId: 5,
        pName: "Bluetooth",
        pCompany: "Onplus",
        pPrice: 2000
    }, {
        pId: 6,
        pName: "Mobile",
        pCompany: "Samsung",
        pPrice: 25000
    }, {
        pId: 7,
        pName: "Laptop",
        pCompany: "Acer",
        pPrice: 50000
    }, {
        pId: 8,
        pName: "Laptop",
        pCompany: "Lenovo",
        pPrice: 48000
    }]
    res.json(products)
})

Server.post('/adduser', (req, res) => {
    const reqData = req.body
    console.log(reqData)
    res.send('data posted')
})

Server.post('/employees', (req, res) => {
    const reqData = req.body
    console.log(reqData)
    res.send('data posting')
})

//attach routes to server
Server.use('/api/', require("./src/Routes/Routes"))

// start the server
Server.listen(5000, () => {
    console.log('Server Started')
})