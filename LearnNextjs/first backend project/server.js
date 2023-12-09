const express = require("express");
const app = express();
const port = 8000;

// get --> get
// post--> create
// delete --> delete
// put --> update whole
// patch --> update only the data is send
const posts = [
  {
    id: 1,
    title: "first post",
  },
  {
    id: 2,
    title: "second post",
  },
];
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});
app.get("/filterPost/:id", (req, res) => {
  console.log("req", req.params.id);
  const postId = req.params.id;
  const filteredPost = posts.filter((post) => post.id == postId);
  //   res.send("Hello ! hy");
  res.status(200).json(filteredPost);
});

app.post("/create-post", (req, res) => {
  console.log("req", req.query);
  const newPost = {
    id: req.query.id,
    title: req.query.title,
  };
  posts.push(newPost);
  res.json(posts);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
