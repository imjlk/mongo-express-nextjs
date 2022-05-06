import mongoose from 'mongoose'

const SubwayStoreSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: [true, 'index is required!'],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'status is required!'],
    trim: true,
  },
  subwayLine: {
    type: String,
    required: [true, 'subwayLine is required!'],
    trim: true,
  },
  subwayName: {
    type: String,
    required: [true, 'subwayName is required!'],
    trim: true,
  },
  storeNum: {
    type: String,
    required: [true, 'storeNum is required!'],
    trim: true,
  },
  size: {
    type: String,
    required: [true, 'size is required!'],
    trim: true,
  },
  storeType: {
    type: String,
    required: false,
    trim: true,
  },
  contractStartDate: {
    type: String,
    required: false,
    trim: true,
  },
  contractEndDate: {
    type: String,
    required: false,
    trim: true,
  },
  montlyRentFee: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.SubwayStore ||
  mongoose.model('SubwayStore', SubwayStoreSchema)
