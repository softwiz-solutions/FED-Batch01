const express = require("express");
const app = express();
const port = 8000;
var bodyParser = require("body-parser");
const verifyUser = require("./src/utils/verifyUser");
const TodoRouter = require("./src/routes/todoRoutes");
// get --> get
// post--> create
// delete --> delete
// put --> update whole
// patch --> update only the data is send
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// post router
app.use(TodoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
