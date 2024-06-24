// const { ObjectId } = require('mongodb');

// const Admin = {
//   collectionName: 'admins',
//   schema: {
//     admin_id: String,
//     password: String,
//   },
// };

// module.exports = Admin;

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Admin', adminSchema);
