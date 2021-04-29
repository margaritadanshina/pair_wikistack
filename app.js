const express = require("express");
const app = express();
const morgan = require("morgan");
const expressStatic = express.static(path.join(__dirname, "./public"));
const bodyParsing = express.urlencoded({ extended: false });

app.use(morgan("dev"));
app.use(expressStatic);
app.use(bodyParsing);

app.get("/", function (req, res) {
  res.send("hello world");
});

// app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: false }));
