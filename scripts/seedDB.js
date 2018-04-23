const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise; 

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/comments",
  {
    useMongoClient: true
  },
  console.log('CONNECTING TO DB')
);

const commentsSeed = [
  {
    name: "Example",
    email: "example@example.com",
    comment:
      "This is a text comment",
    mailingList: false,
    date: new Date(Date.now())
  }
];


db.Comments
  .remove({})
  .then(() => 
    db.Comments.collection.insert(commentsSeed)
  )
  .then(docs => {
    console.log(JSON.stringify(docs));
    console.log(JSON.stringify(docs.insertedIds) + " record inserted!");

    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
