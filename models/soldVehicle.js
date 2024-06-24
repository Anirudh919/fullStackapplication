// const { ObjectId } = require('mongodb');

// const SoldVehicle = {
//   collectionName: 'sold_vehicles',
//   schema: {
//     vehicle_id: String,
//     car_id: String,
//     vehicle_info: Object,
//   },
// };

// module.exports = SoldVehicle;

const mongoose = require('mongoose');

const soldVehicleSchema = new mongoose.Schema({
  vehicle_id: {
    type: String,
    required: true,
    unique: true,
  },
  car_id: {
    type: String,
    required: true,
  },
  vehicle_info: Object,
});

module.exports = mongoose.model('SoldVehicle', soldVehicleSchema);
