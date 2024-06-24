// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const connectDB = require('../config/db');
// const { ObjectId } = require('mongodb');
// const dotenv = require('dotenv');
// dotenv.config();

// async function register(req, res) {
//   const db = await connectDB();
//   const { user_email, password } = req.body;

//   const userExists = await db.collection(User.collectionName).findOne({ user_email });
//   if (userExists) return res.status(400).json({ message: 'User already exists' });

//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   const newUser = {
//     user_email,
//     user_id: new ObjectId().toString(),
//     user_location: '',
//     user_info: {},
//     password: hashedPassword,
//     vehicle_info: [],
//   };

//   await db.collection(User.collectionName).insertOne(newUser);

//   res.status(201).json({ message: 'User registered successfully' });
// }

// async function login(req, res) {
//   const db = await connectDB();
//   const { user_email, password } = req.body;

//   const user = await db.collection(User.collectionName).findOne({ user_email });
//   if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//   const validPass = await bcrypt.compare(password, user.password);
//   if (!validPass) return res.status(400).json({ message: 'Invalid email or password' });

//   const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//   res.header('Authorization', `Bearer ${token}`).json({ token });
// }

// module.exports = { register, login };


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const mongoose=require('mongoose')
dotenv.config();






async function register(req, res) {
  const { user_email, password } = req.body;

  console.log('User exists',req.body)
  // const userExists = await User.findOne({ user_email });
  // if (userExists) return res.status(400).json({ message: 'User already exists' });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    user_email,
    user_id: new mongoose.Types.ObjectId().toString(),
    user_location: '',
    user_info: {},
    password: hashedPassword,
    vehicle_info: [],
  });

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
}

async function login(req, res) {
  const { user_email, password } = req.body;

  const user = await User.findOne({ user_email });
  if (!user) return res.status(400).json({ message: 'Invalid email or password' });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ message: 'Invalid email or password' });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.header('Authorization', `Bearer ${token}`).json({ token });
}

module.exports = { register, login };
