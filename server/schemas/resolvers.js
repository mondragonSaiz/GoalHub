const { User, Area, Task } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('tasks').populate('area');
    },
    user: async (parent, { _id }) => {
      return User.findById(_id).populate('tasks').populate('area');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    areas: async () => {
      return Area.find().populate('users').populate('supervisor');
    },
    area: async (parent, { _id }) => {
      return Area.findById(_id).populate('users');
    },
    tasks: async () => {
      return Task.find();
    },
    task: async (parent, { _id }) => {
      return Task.findById(_id);
    },
  },

  Mutation: {
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
    forgotPassword: async (parents, { email, password }) => {
      const user = await User.findOneAndUpdate(
        { email: email },
        { password: password },
        { runValidators: true, new: true }
      );
      const token = signToken(user);
      return { user, token };
    },
    addArea: async (parent, { name, supervisorID }) => {
      console.log('supervisor', supervisorID);
      try {
        const newArea = await Area.create({
          name,
          supervisor: supervisorID,
        });
        const populatedArea = await Area.findById(newArea._id).populate(
          'supervisor'
        );
        return populatedArea;
      } catch (err) {
        console.log(err);
      }
    },
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
    addTask: async (parent, { taskDesc, name, isCompleted, user }, context) => {
      const newTask = await Task.create({
        taskDesc,
        name,
        isCompleted,
        user,
      });
      const populatedTask = await Task.findOne({ _id: newTask._id }).populate(
        'user'
      );
      updatedUser = await User.findOneAndUpdate(
        { _id: user },
        { $addToSet: { tasks: newTask._id } },
        { new: true }
      ).populate('tasks');
      return updatedUser;
    },
    removeTask: async (parent, { taskId }, context) => {
      const deleteTask = await Task.findOneAndDelete({
        _id: taskId,
      });
      return deleteTask;
    },
    removeUser: async (parent, { userId }, context) => {
      const deleteUser = await User.findOneAndDelete({
        _id: userId,
      });
      return deleteUser;
    },
    removeArea: async (parent, { areaId }, context) => {
      const deleteArea = await Area.findOneAndDelete({
        _id: areaId,
      });
    },
  },
};

module.exports = resolvers;
