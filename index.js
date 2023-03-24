const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5005;

/** define sequelize connection here */

const Sequelize = require("sequelize");
const sequelize = new Sequelize("orm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

/**Sequelize method define auth */
sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});

//////