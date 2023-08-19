const db = require('../config/connection');
const { User, Task, Area } = require('../models');

const areaSeeds = require('./areaSeeds.json');
const userSeeds = require('./userSeeds.json');
const taskSeeds = require('./taskSeeds.json');

//TODO: Automate seeding process
db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  await Task.deleteMany({});
  await Task.create(taskSeeds);
  await Area.deleteMany({});
  await Area.create(areaSeeds);

  console.log('all done!');
  process.exit(0);
});
