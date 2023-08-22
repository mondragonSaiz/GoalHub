const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const areaSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
    unique: true,
  },
  supervisor: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: 'User',
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
