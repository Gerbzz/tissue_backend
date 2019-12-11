// Neil Gerbe

// init express
var express = require('express')
var app = express()
//init mongoDB
var MongoClient = require('mongodb').MongoClient



// import my routes
var issues = require('../routes/issues')
var users = require('../routes/users')

// import my handlers
app.use('/', issues)
app.use(' /', users)



// Connect database and start server
MongoClient.connect('mongodb+srv://admin:<admin123>@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})