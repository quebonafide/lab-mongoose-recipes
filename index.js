const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });





Recipe.create({
  title:"Dim Sum",
  level: 'Easy Peasy',
  ingredients : ['flour', 'meat'],
  cuisine: 'asian',
  dishType: 'main_course',
}).then(recipe => {
        console.log('this recipe was created: ', recipe);
    })
    .catch(err => {
        console.log(err);
    })

Recipe.insertMany(data)
.then(recipe => {
  console.log('these recipe were created: ', recipe);
})
.catch(err => {
  console.log(err);
})

// Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, { new: true })
// .then(recipe => {
//     console.log('this recipe was replaced: ', recipe);
// })
// .catch(err => {
//     console.log(err);
// })

// Recipe.deleteOne({ name: 'Carrot Cake' })
// .then(recipe => {
//   console.log('this recipe was deleted: ', recipe);
//   //mongoose.connection.close();
// })
// .catch(err => {
//   console.log(err);
// })

// Promise.all([promise1, promise2])
//   .then(() => {
//     console.log('done');
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));