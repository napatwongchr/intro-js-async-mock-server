const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let user = {
  id: 1,
  name: "John",
  age: 20,
};

let posts = [
  {
    id: 1,
    userId: 1,
    title: "Example Post #1",
    content: "This is example post #1 content",
  },
  {
    id: 2,
    userId: 2,
    title: "Example Post #2",
    content: "This is example post #2 content",
  },
  {
    id: 3,
    userId: 1,
    title: "Example Post #3",
    content: "This is example post #3 content",
  },
];

let comments = [
  {
    id: 1,
    userId: 1,
    postId: 1,
    content: "This is example comment of post 1",
  },
  {
    id: 2,
    userId: 2,
    postId: 1,
    content: "This is example comment of post 1",
  },
  {
    id: 3,
    userId: 1,
    postId: 3,
    content: "This is example comment of post 3",
  },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/user", (req, res) => {
  res.send({
    data: user,
  });
});

app.get("/user/:id/posts", (req, res) => {
  res.send({
    data: posts.filter((post) => req.params.id == post.userId),
  });
});

app.get("/post/:id/comments", (req, res) => {
  res.send({
    data: comments.filter((comment) => req.params.id == comment.postId),
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
