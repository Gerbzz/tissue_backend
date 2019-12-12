var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://admin:admin123@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority'
var db;
var users;
//var userList = [];

function User(id, name, email, created, updated, details, status) {
    this.id = id;   // unique number for each user
    this.name = name;   //(active, inactive)
    this.email = email // users email
    this.created = created;  //Date the user was created
    this.updated = updated;  //Date the user was last updated
    this.details = details; //Details of the user 
    this.status = status; // Status of the user, active or inactive
}



function users() {
    console.log("ewwwwww from users function in user.js");
    var dbo = db.db("Tissue");
	dbo.collection("users").find().toArray(function(err, result) {
    if (err) throw err;
    users = result;
    });
    return users;
   // return userList;
};


function create_user(id, name, email, created, updated, details, status) {
    console.log("Creating user object....");
    var newUser = new User(id, name, email, created, updated, details, status)
    dbo.collection('users').insertOne(newUser, (err, result) => {
		if (err) return console.log(err)
			console.log('saved to database');
		})
    //userList.push(newUser);
};

function update_user(id, name, email, created, updated, details, status) {
    console.log("Updating user object....");
    var dbo = db.db("Tissue");
	dbo.collection("users").update({ "id": id }, { "$set": { "name": name, "email": email, "created": created, "updated": updated,"details": details, "status": status}
    })
    console.log("Updated one user....");

};


function delete_user(id) {
    console.log("deleting user object....");
    var dbo = db.db("Tissue");
	dbo.collection("users").remove({id: id},(err, res) =>{
  	console.log(id);
	if(err) return res.send(500, err);
		console.log("1 user deleted with id " + id);
	});
};

function connectToTissueData() {
	//connect to the mongodb cluster called tissue	
	//must call before using the module
	MongoClient.connect(url , { useNewUrlParser: true },(err, database) => {
		if (err) return console.log(err);
			db = database;
	});
}

module.exports = { create_user, users, update_user, delete_user, connectToTissueData };