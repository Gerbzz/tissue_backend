//Neil Gerbe
var express = require('express')
var router = express.Router()
var user_manager = require('user-manager');
//init mongoDB
var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://admin:admin123@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority')

var db 


// GET method route
router.get('/users', function (req, res) {
    // implement mongoDB HERE
    db.users.find(); // gets all rows in the collection of users"

    // response
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
        // implement mongoDB HERE
        db.users.insert(userObj);

        // response
        res.send(userObj); //PUT to the userObj
    });
})



// export users.js
module.exports = router