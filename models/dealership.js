// const { ObjectId } = require('mongodb');

// const Dealership = {
//   collectionName: 'dealerships',
//   schema: {
//     dealership_email: String,
//     dealership_id: String,
//     dealership_name: String,
//     dealership_location: String,
//     password: String,
//     dealership_info: Object,
//     cars: [String],
//     deals: [String],
//     sold_vehicles: [String],
//   },
// };

// module.exports = Dealership;

const mongoose = require('mongoose');

const dealershipSchema = new mongoose.Schema({
  dealership_email: {
    type: String,
    required: true,
    unique: true,
  },
  dealership_id: {
    type: String,
    required: true,
    unique: true,
  },
  dealership_name: String,
  dealership_location: String,
  password: {
    type: String,
    required: true,
  },
  dealership_info: Object,
  cars: [String],
  deals: [String],
  sold_vehicles: [String],
});

module.exports = mongoose.model('Dealership', dealershipSchema);

