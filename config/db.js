// const mongodb = require('mongodb');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// dotenv.config();

// const MongoClient = mongoose.MongoClient;



// async function connectDB(){
//   try{
//     await mongoose.connect(uri);
//     console.log('connected to mongodb');
//   }catch(err){
//     console.log(err);

//   }
// }

// const connectDB = callback => {
//   MongoClient.connect(
//     uri
//   ).then(client => {
//       console.log('Connected!',client); 
//       callback();
//     }).catch(err => {
//       console.log(err);
//       throw err;
//     });
// };
// const client =  MongoClient(uri , 
//   { useNewUrlParser: true, useUnifiedTopology: true}
// ).then(client => {
//   console.log('Connected!');
//   return client.db(process.env.DB_NAME);
// })
// .catch(err => {
//   console.log(err);
//   throw err;
// });;

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log('MongoDB connected');
//     return client.db(process.env.DB_NAME);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// }

// module.exports = connectDB();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       // useUnifiedTopology: true,
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// async function connectDB(){
//     try{
//       await mongoose.connect(URI);
//       console.log('connected to mongodb');
//     }catch(err){
//       console.log("error",err);
  
//     }
//   }

const connectDB = async()=>{
  try{
    await mongoose.connect(URI);
    console.log('connection is successful');
    
  }catch(err){
    console.log("connection failed",err);
    process.exit(0);
  }
}

module.exports = connectDB;



