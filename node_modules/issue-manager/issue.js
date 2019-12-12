var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://admin:admin123@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority'
var db;
var issues;
// var issueList = [];

function Issue(id, title, status, assignee, created, updated, details) {
    this.id = id;   // unique number for each issue
    this.title = title;    // title of the issue
    this.status = status;   //(New, Closed, Resolved)
    this.assignee = assignee;  //The person the Issue is assignment to
    this.created = created;  //Date the issue was created
    this.updated = updated;  //Date the issue was last updated
    this.details = details; //Details of the issue 
}



function issues() {
    console.log("ewwwwww from issues function in issue.js");
    var dbo = db.db("Tissue");
	dbo.collection("issues").find().toArray(function(err, result) {
    if (err) throw err;
    issues = result;
    });
    return issues;
   // return issueList;
};


function create_issue(id, title, status, assignee, created, updated, details) {
    console.log("Creating issue object....");
    var newIssue = new Issue(id, title, status, assignee, created, updated, details)
    var dbo = db.db("Tissue");
    dbo.collection('issues').insertOne(newIssue, (err, result) => {
		if (err) return console.log(err)
			console.log('saved to database');
		})
   //issueList.push(newIssue);
};

function update_issue(id, title, status, assignee, created, updated, details) {
    console.log("Updating issue object....");
    var dbo = db.db("Tissue");
	dbo.collection("issues").update({ "id": id }, { "$set": { "title": title, "status": status, "assignee": assignee, "created": created, "updated": updated, "details": details}
    })
    console.log("Updated one issue....");

    // for (i = 0, i < issueList.length; i++;) {
    //     if (i === parseInt(issueList.length)) { // issues is the function that returns issueList, if issueList length in the array is 
    //         issueList.pop([i - 1]) // get rid of the old issue with the same value as "i" in the array 
    //         var updateIssue = new Issue(id, title, status, assignee, created, updated, details) // add updated issue
    //         issueList.push(updateIssue);
    //     }
    // }
};

function delete_issue(id) {
    console.log("deleting issue object....");
    var dbo = db.db("Tissue");
	dbo.collection("issues").remove({id: id},(err, res) =>{
  	console.log(id);
	if(err) return res.send(500, err);
		console.log("1 issue deleted with id " + id);
	});
    // for (id = 0, id < issueList.length; id++;) {
    //     if (id === parseInt(issueList.length)) { // issues is the function that returns issueList, if issueList length in the array is 
    //         issueList.pop([id - 1]) // get rid of the old issue with the same value as "i" in the array   
    //     }
    // }
};

function connectToTissueData() {
	//connect to the mongodb called tissue	
	//must call before using the module
	MongoClient.connect(url , { useNewUrlParser: true },(err, database) => {
		if (err) return console.log(err);
			db = database;
	});
}

module.exports = { create_issue, issues, update_issue, delete_issue, connectToTissueData};