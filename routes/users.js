//Neil Gerbe
var express = require('express')
var router = express.Router()
var user_manager = require('user-manager');

// GET method route
router.get('/users', function (req, res) {
    res.json(req.body) //GET request to the users page, returns all as json
})

// PUT method route
router.put('/users/users.json', function (req, res) {
    var userReq = '';
    req.on('data', (chunk) => {
        userReq += chunk;
    });
    req.on('end', () => {
        userReq = JSON.parse(userReq);
        var userObj = user_manager.create_user(userReq.id, userReq.status, userReq.email, userReq.created, userReq.updated, userReq.details);
        res.send(userObj); //PUT to the userObj
    });
    res.send(users) //put request to the users page
})

// export users.js
module.exports = router