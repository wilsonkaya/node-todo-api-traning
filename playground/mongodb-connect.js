// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectId} = require('mongodb')

// Descturcturing  is new fetature of ES 6 which is important to understand
// let user = {name: "fatih", lastName: "kaya"}
// let {name} = user

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log("Unable to connect the data base")
  }
  console.log("Connected to MongoDb server")

  db.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log("Unable to insert Todo", err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  // db.collection('Users').insertOne({
  //   name: "fatih",
  //   age: 32,
  //   location: "Boston"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert Todo", err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.close()
})
