function Issue(id,title,status,assignee,created,updated,details) {
    this.id = id;   // unique number for each issue
    this.title =  title;    // title of the issue
    this.status =  status;   //(New, Closed, Resolved)
    this.assignee = assignee;  //The person the Issue is assignment to
    this.created = created;  //Date the issue was created
    this.updated = updated;  //Date the issue was last updated
    this.details = details; //Details of the issue 
}

var issueList = [];

function issues() {
    console.log("hi");
    return issueList;
};


function create_issue(id,title,status,assignee,created,updated,details) {
    console.log("Creating issue object....");
    var newIssue = new Issue(id,title,status,assignee,created,updated,details)
    issueList.push(newIssue);
};

module.export.create_issue = create_issue; 
module.export.issues = issues;