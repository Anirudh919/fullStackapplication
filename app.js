const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./Routes/userRoutes');

const app = express();
// // const MongoClient = mongoose.MongoClient;
dotenv.config();
app.use(express.json());

app.use('/api/users', userRoutes); 

// const PORT = process.env.PORT || 3000;
// const MONGO_URL = process.env.MONGO_URL;

// MongoClient.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
//   console.log("Database is connected successfully");
//   app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`);
//   })
// }).catch((err)=>{console.log(err)});
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const dotenv = require('dotenv');
// // const connectDB = require('./config/db');
// const { default: mongoose } = require('mongoose');

// dotenv.config();

// const URI = process.env.MONGO_URI;
// console.log(URI)
// const app = express();

// Connect to the database
// connectDB();

// app.use(express.json());

app.use('/api/users', require('./Routes/userRoutes'));

const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
})
