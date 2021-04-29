const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
// const router = require('../../../PairExercise.Wizard-news-pt3/router/posts');
// const { addPage } = require('../views');
// ...

// app.use('/wiki', wikiRouter);

// router.get("/add", (req, res) => {
//     res.send(addPage());
//   });

router.get("/", (req, res, next) => {
    res.send("got to GET /wiki");
});

router.post("/", (req, res, next) => {
    res.send("got to POST /wiki");
});

router.get("/add", (req, res, next) => {
    res. send("got to GET /wiki/add/");
});