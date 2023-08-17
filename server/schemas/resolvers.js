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
      try{
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
      }catch(err){
        console.log(err)
      }
    },
    forgotPassword: async (parents, { email, password }) => {
      try{
        const user = await User.findOneAndUpdate(
          { email: email },
          { password: password },
          { runValidators: true, new: true }
        );
        const token = signToken(user);
        return { user, token };
      }catch(err){
        console.log(err)
      }
    },
    addArea: async (parent, { name, supervisorID }) => {
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
      try{
        const user = await User.create({
          firstName,
          lastName,
          isEmployee,
          email,
          password,
        });
        const token = signToken(user);
        return { token, user };
      }catch(err){
        console.log(err)
      }
    },
    addTask: async (parent, { taskDesc, name, isCompleted, user }, context) => {
      try{      
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
      return populatedTask;}catch(err){
        console.log(err)
      }
    },
    removeTask: async (parent, { taskId }, context) => {
      try{
        const deleteTask = await Task.findOneAndDelete({
          _id: taskId,
        });
        return deleteTask;
      }catch(err){
        console.log(err)
      }
    },
    removeUser: async (parent, { userId }, context) => {
      try{
        const deleteUser = await User.findOneAndDelete({
          _id: userId,
        });
        return deleteUser;
      }catch(err){
        console.log(err)
      }
    },
    removeArea: async (parent, { areaId }, context) => {
      try{
        const deleteArea = await Area.findOneAndDelete({
          _id: areaId,
        });
      }catch(err){
        console.log(err)
      }
    },
  },
};

module.exports = resolvers;


/*

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

        updatedUser = await User.findOneAndUpdate(
          { _id: user}, 
          { $addToSet: {tasks: newTask._id } },
          { new: true}, 
        )

    return  populatedTask;
    },

  throw new AuthenticationError("You must be logged in to assign tasks")
  } removeTask: async (parent, { taskId }, context) => {
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
};*/