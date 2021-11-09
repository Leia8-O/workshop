const Apify = require("apify");

Apify.main(async () => {
  //   const input = await Apify.getInput();

  const input = "Michaela";
  await Apify.pushData({ input });
  let namedDataset = await Apify.openDataset("dataset-one");
  let data = await namedDataset.getData();

  console.log(data.total);

  //data.count
  //await namedDataset.pushData({ input });
});
