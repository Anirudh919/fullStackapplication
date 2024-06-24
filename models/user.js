// const { ObjectId } = require('mongodb');

// const User = {
//   collectionName: 'users',
//   schema: {
//     user_email: String,
//     user_id: String,
//     user_location: String,
//     user_info: Object,
//     password: String,
//     vehicle_info: [String],
//   },/ ;fd
// };

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_location: String,
  user_info: Object,
  password: {
    type: String,
    required: true,
  },
  vehicle_info: [String],
});

module.exports = mongoose.model('User', userSchema);
