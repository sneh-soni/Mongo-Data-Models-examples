import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server ready");
});

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content: "this is first joke",
    },
    {
      id: 2,
      content: "this is second joke",
    },
    {
      id: 3,
      content: "this is third joke",
    },
    {
      id: 4,
      content: "this is fourth joke",
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Server started at localhost${port}`);
});
