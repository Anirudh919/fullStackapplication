// const { ObjectId } = require('mongodb');

// const Car = {
//   collectionName: 'cars',
//   schema: {
//     car_id: String,
//     type: String,
//     name: String,
//     model: String,
//     car_info: Object,
//   },
// };

// module.exports = Car;

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  car_id: {
    type: String,
    required: true,
    unique: true,
  },
  type: String,
  name: String,
  model: String,
  car_info: Object,
});

module.exports = mongoose.model('Car', carSchema);

