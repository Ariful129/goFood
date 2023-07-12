const mongoose = require("mongoose");
//const mongoURI="mongodb+srv://gofood:12345@cluster0.n0zud8b.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoURI = "mongodb://gofood:12345@ac-mzdbebb-shard-00-00.n0zud8b.mongodb.net:27017,ac-mzdbebb-shard-00-01.n0zud8b.mongodb.net:27017,ac-mzdbebb-shard-00-02.n0zud8b.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-53w3qu-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB = async () => {

  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("----", err)
    else {
      console.log("db Connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {

        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) {
            console.log(err);
          } else {
            global.food_items = data;
            global.foodCategory=catData;
          }

        })
        // if (err) {
        //   console.log(err);
        // } else {
        //    global.food_items=data;


        // }
      });

    }
  });
}

module.exports = mongoDB;