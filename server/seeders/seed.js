const areaSeeds = require('./areaSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);
  // await User.deleteMany({});
  // await User.create(userSeeds);

  await Task.deleteMany({});
  await Task.create(taskSeeds);
  await Area.deleteMany({});
  await Area.create(areaSeeds);

  console.log('all done!');
  process.exit(0);
});