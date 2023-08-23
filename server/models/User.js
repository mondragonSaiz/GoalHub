const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Area = require('./Area');
const Order = require('./Order');
// const validator = require('validator');

// const keysecret = process.env.SECRET_KEY

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate(value){
    //   if (!validator.isEmail(value)){
    //     throw new Error("not valid email")
    //   }
    // }
    // match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  },
  password: {
    type: String,
    required: true,
    // match: /((?=.*[A-Z])(?=.*[a-z])(?=.*\d))(?=.{8,})/
  },
  isEmployee: {
    type: Boolean,
    required: true,
  },
  userIcon: {
    type: String,
  },
  area: {
    type: Schema.Types.ObjectId,
    ref: 'Area',
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//Hash password 
// userSchema.pre('save', async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     // this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// //Generate Token
// userSchema.methods.generateAuthtoken = async function () {
//   try {
//       let token23 = jwt.sign({ _id: this._id }, keysecret, {
//           expiresIn: "1d"
//       });

//       this.tokens = this.tokens.concat({ token: token23 });
//       await this.save();
//       return token23;
//   } catch (error) {
//       res.status(422).json(error)
//   }
// }


const User = mongoose.model('User', userSchema);

module.exports = User;
