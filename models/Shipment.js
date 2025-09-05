const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  location: { type: String, required: true },
  expectedDelivery: { type: Date, required: true },
  history: [{ status:String, location:String, date:{type:Date, default:Date.now} }],
  customerEmail: { type:String }
});

module.exports = mongoose.model('Shipment', shipmentSchema);