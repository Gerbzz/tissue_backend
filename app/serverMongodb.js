var MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://admin:admin123@tissue-ifolj.mongodb.net/test?retryWrites=true&w=majority')
//global variables
var db = database

db.createCollection('issues') // create a "collection" for mongoDB called issues





// GET REQUEST //
app.get('/', (req, res) => {
    db.issues.find() // gets all rows
    db.find().pretty() // gets all rows formated 

    // Handle get event here
})





// POST REQUEST //
app.post('/', (req, res) => {
    // INSERT ONE ROW
    db.issues.insert({
        title: 'issue One',
        body: 'Body of issue one',
        category: 'News',
        tags: ['news', 'events'],
        user: {
          name: 'John Doe',
          status: 'author'
        },
        date: Date()
    }) // END OF // INSERT ONE ROW

    // INSERT MORE THAN ONE ROW
    db.issues.insertMany([
        {
          title: 'issue Two',
          body: 'Body of issue two',
          category: 'Technology',
          date: Date()
        },
        {
          title: 'issue Three',
          body: 'Body of issue three',
          category: 'News',
          date: Date()
        },
        {
          title: 'issue Four',
          body: 'Body of issue three',
          category: 'Entertainment',
          date: Date()
        }
    ]) // END OF // INSERT MORE THAN ONE ROW
    // Handle post event here
})



// PUT REQUEST //
app.put('/', (req, res) => {
    // UPDATE ROW
    db.issues.update({ id: issueList.id },
    {
      title: 'issue Two',
      body: 'New body for issue 2',
      date: Date()
    },
    {
      upsert: true
    })// END OF // UPDATE ROW
    // Handle put event here
})




// DELETE REQUEST //
app.delete('/', (req, res) => {
    db.issues.remove({ title: ' Four' })
    // Handle delete event here
})





var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
