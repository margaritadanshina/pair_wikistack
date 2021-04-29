const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send(" ");
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: false }));
