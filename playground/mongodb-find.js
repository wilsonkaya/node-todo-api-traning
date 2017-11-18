// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectId} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log("Unable to connect the data base")
  }
  console.log("Connected to MongoDb server")

  // db.collection("Todos").find({
  //   _id: new ObjectId("5a104f36b214eb0da3447eb0")//object id formats it in porper way
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log("Unable to fetch todos" + err)
  // })

  // db.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count ${count}`)
  // }, (err) => {
  //   console.log("Unable to fetch todos" + err)
  // })

  db.collection("Users").find({name: "fatih"}).count().then((count)=> {
    console.log(`there are ${count} fatihs`)
  }, (err) => {
    console.log(err)
  })


  // db.close()
})
