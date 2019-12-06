// Neil Gerbe

var http = require('http');
var issue_manager = require('issue-manager');

//  createServer function makes a server with the http protocol
http.createServer(function (req,res) {
    if(req.method == 'GET') {
        var issues = JSON.stringify(issue_manager.issues()); //get request
        res.end(issues);
    }
    else if(req.method == 'POST') { //post request
        var issueReq = '';
        req.on('data', (chunk) => {
            issueReq += chunk;
        });
        req.on('end',() => {    
            issueReq = JSON.parse(issueReq);
            var issueObj = issue_manager.create_issue(issueReq.Id, issueReq.Title,issueReq.Status,issueReq.Asignee,issueReq.Created,issueReq.Updated, issueReq.Details);
            res.end(issueObj); //end to send the issueObj
        });
    }
}).listen(3000); // now listening on port 