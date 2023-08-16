const { User, Task } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('tasks');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('tasks');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, isEmployee, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        isEmployee,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveTask: async (parent, { taskDesc , name, isCompleted,  user}, context) => {
     // if (context.user) {
         const newTask = await Task.create( {
           taskDesc, name, isCompleted, user})


           const populatedTask = await Task.findOne({ _id: newTask._id }).populate('user')

           console.log(newTask._id.toString())

           updatedUser = await User.findOneAndUpdate(
             { _id: user}, 
             { $addToSet: {tasks: newTask._id } },
             { new: true}, 
           )
 
       return  populatedTask;
       }

    /* throw new AuthenticationError("You must be logged in to assign tasks")
    }*/ removeTask: async (parent, { taskId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { taskId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('Error when deleting task');
    },
    forgotPassword: async (parents, { email, password }) => {
      const user = await User.findOneAndUpdate(
        { email: email },
        { password: password },
        { runValidators: true, new: true }
      );
      const token = signToken(user);
      return { user, token };
    },
  },
};

module.exports = resolvers;

/*
 saveTask: async (parenttaskInfo, { taskDesk , name}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id }, 
          { $push: {tasks: taskDesk } },
          { new: true}, 
        )
        .populate("tasks");
      return  updatedUser;
      }
      throw new AuthenticationError("You must be logged in to assign tasks");
    },

    */
