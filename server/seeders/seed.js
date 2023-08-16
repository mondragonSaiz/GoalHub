const db = require('../config/connection');
// const { Thought } = require('../models');
// const thoughtSeeds = require('./thoughtSeeds.json');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
db.once('open', async () => {
  // await Thought.deleteMany({});
  // await Thought.create(thoughtSeeds);
  await User.deleteMany({});
  await User.create(userSeeds);
  console.log('all done!');
  process.exit(0);
});
