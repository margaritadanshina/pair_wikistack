const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const wiki = require("../routes/wiki");
const users = require("../routes/users");
//const { db } = require("./models");
const { db, Page, User } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wiki);

app.get("/", function (req, res) {
  res.send(" ");
});

// sync allows interaction with data,
const init = async () => {
  await Page.sync();
  await User.sync();
  //await sequelize.sync({ force: true });  // <- ???
  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: false }));
