const db = require('../config/connection');
const { User, Task, Area, Product } = require('../models');

const areaSeeds = require('./areaSeeds.json');
// const userSeeds = require('./userSeeds.json');
// const taskSeeds = require('./taskSeeds.json');
const productsSeeds = require('./productSeeds.json');
db.once('open', async () => {
  try {
    // await User.deleteMany({});
    // await User.create(userSeeds);
    // await Task.deleteMany({});
    // await Task.create(taskSeeds);

    await Area.deleteMany({});
    await Area.create(areaSeeds);
    // await Product.deleteMany({});
    // await Product.create(productsSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

const seeds = async () => {};

module.exports = seeds;
