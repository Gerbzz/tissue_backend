//Neil Gerbe
var express = require('express')
var router = express.Router()
var issue_manager = require('issue-manager');


// GET method route 
router.get('/issues', function (req, res) { // GET request
  var issues = issue_manager.issues();
  res.json(issues)

  // res.send(JSON.stringify(issues));

})

// PUT method route
router.put('/issues/issues.json', function (req, res) { // PUT request
  var issueReq = '';
  req.on('data', (chunk) => {
    issueReq += chunk;
  });
  req.on('end', () => {
    issueReq = JSON.parse(issueReq);
    var issueObj = issue_manager.create_issue(issueReq.id, issueReq.title, issueReq.status, issueReq.assignee, issueReq.created, issueReq.updated, issueReq.details);
    res.send(issueObj); //PUT to the issueObj

  });
})

// POST method route
router.post('/issues/:issue_id.json', function (req, res) {
  var issueReq = '';
  req.on('data', (chunk) => {
    issueReq += chunk;
  });
  req.on('end', () => {
    issueReq = JSON.parse(issueReq);
    var issueObj = issue_manager.update_issue(issueReq.id, issueReq.title, issueReq.status, issueReq.assignee, issueReq.created, issueReq.updated, issueReq.details)
    res.send(issueObj); //POST request to the issues page
  });

})

// DELETE method route
router.delete('/issues/:issue_id.json', function (req, res) {
  var issueReq = '';
  req.on('data', (chunk) => {
    issueReq += chunk;
  });
  req.on('end', () => {
    issueReq = JSON.parse(issueReq);
    var issueObj = issue_manager.delete_issue(issueReq.id)
    res.send(issueObj); //sends res to the issues page to delete the user
  });
  //DELETE request to the issues page
});


// export issues.js
module.exports = router