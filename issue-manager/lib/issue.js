function Issue(id, title, status, assignee, created, updated, details) {
    this.id = id;   // unique number for each issue
    this.title = title;    // title of the issue
    this.status = status;   //(New, Closed, Resolved)
    this.assignee = assignee;  //The person the Issue is assignment to
    this.created = created;  //Date the issue was created
    this.updated = updated;  //Date the issue was last updated
    this.details = details; //Details of the issue 
}

var issueList = [];

function issues() {
    console.log("hi from issues function in issue.js");
    return issueList;
};


function create_issue(id, title, status, assignee, created, updated, details) {
    console.log("Creating issue object....");
    var newIssue = new Issue(id, title, status, assignee, created, updated, details)
    issueList.push(newIssue);
};

function update_issue(id, title, status, assignee, created, updated, details) {
    console.log("Updating issue object....");
    for (i = 0, i < issueList.length; i++;) {
        if (i === parseInt(issueList.length)) { // issues is the function that returns issueList, if issueList length in the array is 
            issueList.pop([i - 1]) // get rid of the old issue with the same value as "i" in the array 
            var updateIssue = new Issue(id, title, status, assignee, created, updated, details) // add updated issue
            issueList.push(updateIssue);
        }
    }
};

function delete_issue(id) {
    console.log("deleting issue object....");
    req.body.id = id
    for (id = 0, id < issueList.length; id++;) {
        if (id === parseInt(issueList.length)) { // issues is the function that returns issueList, if issueList length in the array is 
            issueList.pop([id - 1]) // get rid of the old issue with the same value as "i" in the array 
        }
    }
};

module.exports = { create_issue, issues, update_issue, delete_issue };