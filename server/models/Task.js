const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const moment = require('moment');
const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  taskDesc: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MM/DD/YYYY'),
  },
  isCompleted: {
    type: Boolean,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

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

const Task = model('Task', taskSchema);

module.exports = Task;
