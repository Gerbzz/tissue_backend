// Neil Gerbe

// init express
var express = require('express')
var app = express()

// import my routes
var issues = require('../routes/issues')
var users = require('../routes/users')


app.use('/', issues)
app.use(' /users', users)



var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




// // createServer function makes a server with the http protocol
// app.createServer(function (req,res) {
//     if(req.method == 'GET') {
//         //var issues = JSON.stringify(issue_manager.issues()); // get request
//         res.send(issues);
//     }
//     else if(req.method == 'POST') { // post request
//         var issueReq = '';
//         req.on('data', (chunk) => {
//             issueReq += chunk;
//         });
//         req.on('end',() => {    
//             issueReq = JSON.parse(issueReq);
//             var issueObj = issue_manager.create_issue(issueReq.Id, issueReq.Title,issueReq.Status,issueReq.Asignee,issueReq.Created,issueReq.Updated, issueReq.Details);
//             res.send(issueObj); // end to send the issueObj
//         });
//     }
// }).listen(3000); // now listening on port 