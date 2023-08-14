const { Schema, model } = require('mongoose');
//const { isInteger } = require('tailwind-merge/dist/lib/validators');
const dateFormat = require('../utils/dateFormat');

const areaSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  supervisor: {
    type: String,
    required: true,
    trim: true,
  },
  progress: {
    type: Number,
    min: 0,
    default: 0,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Area = model('Area', areaSchema);

module.exports = Area;
