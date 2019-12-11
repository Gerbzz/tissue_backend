var MongoClient = require('mongodb').MongoClient

//global variables
var db = database


// get request
app.get('/', (req, res) => {
    // Handle get event here
})

// post request
app.post('/', (req, res) => {
    // Handle post event here
})

// put request
app.put('/', (req, res) => {
    // Handle put event here
})

// delete request
app.delete('/', (req, res) => {
    // Handle delete event here
})



// Connect database and start server
MongoClient.connect('mongodb+srv://admin:<admin123>@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})