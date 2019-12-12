//Neil Gerbe
var express = require('express')
var router = express.Router()
var user_manager = require('user-manager');
//init mongoDB
user_manager.connectToTissueData();

/////////////// GET method route ////////////////////////
/////////////////////////////////////////////////////////
router.get('/', function (req, res) {
    // implement mongoDB HERE
    // db.users.find(); // gets all rows in the collection of users"

    // response
    res.json(req.body) //GET request to the users page, returns all as json
})


/////////////// PUT method route ////////////////////////
/////////////////////////////////////////////////////////
router.put('/users.json', function (req, res) {
    var userReq = '';
    req.on('data', (chunk) => {
        userReq += chunk;
    });
    req.on('end', () => {
        userReq = JSON.parse(userReq);
        var userObj = user_manager.create_user(userReq.id, userReq.name, userReq.email, userReq.created, userReq.updated, userReq.details, userReq.status);

        // implement mongoDB HERE
        //db.users.insert(userObj);

        // response
        res.send(userObj); //PUT to the userObj
    });
})

/////////////// POST method route ////////////////////////
/////////////////////////////////////////////////////////
router.post('/users_id.json', function (req, res) {
    var userReq = '';
    req.on('data', (chunk) => {
        userReq += chunk;
    });
    req.on('end', () => {
        userReq = JSON.parse(userReq);
        var userObj = user_manager.update_user(userReq.id, userReq.name, userReq.email, userReq.created, userReq.updated, userReq.details, userReq.status);

        // implement mongoDB HERE
        //db.users.insert(userObj);

        // response
        console.log("user " + userReq.id + " was updated");
        res.send(userObj); //PUT to the userObj
    });
})

/////////////// DELETE method route ////////////////////////
////////////////////////////////////////////////////////////
router.delete('/users_id.json', function (req, res) {
    var userReq = '';
    req.on('data', (chunk) => {
        userReq += chunk;
    });
    req.on('end', () => {
        userReq = JSON.parse(userReq);
        var userObj = user_manager.delete_user(userReq.id, userReq.name, userReq.email, userReq.created, userReq.updated, userReq.details, userReq.status);

        // implement mongoDB HERE
        //db.users.insert(userObj);

        // response
        res.send(userObj); //PUT to the userObj
    });
})



// export users.js
module.exports = router