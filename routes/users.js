//Neil Gerbe
var express = require('express')
var router = express.Router()

var users = [];


// GET method route
router.get('/users', function (req, res) {
    res.json(req.params.users) //GET request to the users page, returns all as json
})

// PUT method route
router.put('/users/users.json', function (req, res) {
    res.send(users) //POST request to the users page
})

// export users.js
module.exports = router