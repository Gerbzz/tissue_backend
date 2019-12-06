//Neil Gerbe
var express = require('express')
var router = express.Router()
var issue_manager = require('issue-manager');


// GET method route 
router.get('/issues', function (req, res) { // GET request
  var issues = issue_manager.issues();
  res.send(JSON.stringify(issues));
})

// PUT method route
router.put('/issues/issues.json', function (req, res) { // PUT request
  var issueReq = '';
  req.on('data', (chunk) => {
    issueReq += chunk;
  });
  req.on('end',() => {
    issueReq = JSON.parse(issueReq);  
    var issueObj = issue_manager.create_issue(issueReq.Id, issueReq.Title,issueReq.Status,issueReq.Assignee,issueReq.Created,issueReq.Updated,issueReq.Details);
    res.send(issueObj); //PUT to the issueObj
  });
})

// POST method route
router.post('/issues/:issue_id.json', function (req, res) {
  var issueReq = '';
  req.on('data', (chunk) => {
    issueReq += chunk;
  });
  req.on('end',() => {
    issueReq = JSON.parse(issueReq);
    var issueObj = issue_manager.updateIssue(issueReq.Id, issueReq.Title,issueReq.Status,issueReq.Asignee,issueReq.Created,issueReq.Updated, issueReq.Details)
    res.send(issueObj); //POST request to the issues page
  });
  
})

// DELETE method route
router.delete('/issues/:issue_id.json', function (req, res) {
  res.send('ok') //DELETE request to the issues page
})
// splyce out of the array - terrys tip
// export issues.js
module.exports = router