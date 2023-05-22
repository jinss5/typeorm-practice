require("dotenv").config();

const { createApp } = require("./app.js");
const { dataSource } = require("./dataSource");

const startServer = async () => {
  try {
    const app = createApp();

    dataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.log("Error occurred during Data Source initialization", err);
        dataSource.destroy();
      });
    app.listen(3000, () => console.log(`Server is listening on 3000`));
  } catch (err) {
    console.error(err);
  }
};

startServer();
