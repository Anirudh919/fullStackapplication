// const { ObjectId } = require('mongodb');

// const Deal = {
//   collectionName: 'deals',
//   schema: {
//     deal_id: String,
//     car_id: String,
//     deal_info: Object,
//   },
// };

// module.exports = Deal;
const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  deal_id: {
    type: String,
    required: true,
    unique: true,
  },
  car_id: {
    type: String,
    required: true,
  },
  deal_info: Object,
});

module.exports = mongoose.model('Deal', dealSchema);
