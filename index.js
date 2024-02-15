require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const githubData = {
  login: "sneh-soni",
  id: 113614955,
  node_id: "U_kgDOBsWgaw",
  avatar_url: "https://avatars.githubusercontent.com/u/113614955?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sneh-soni",
  html_url: "https://github.com/sneh-soni",
  followers_url: "https://api.github.com/users/sneh-soni/followers",
  following_url:
    "https://api.github.com/users/sneh-soni/following{/other_user}",
  gists_url: "https://api.github.com/users/sneh-soni/gists{/gist_id}",
  starred_url: "https://api.github.com/users/sneh-soni/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sneh-soni/subscriptions",
  organizations_url: "https://api.github.com/users/sneh-soni/orgs",
  repos_url: "https://api.github.com/users/sneh-soni/repos",
  events_url: "https://api.github.com/users/sneh-soni/events{/privacy}",
  received_events_url: "https://api.github.com/users/sneh-soni/received_events",
  type: "User",
  site_admin: false,
  name: "Sneh Soni",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Frontend web developer (React.js, Next.js, TailwindCSS, Redux Toolkit, Figma) | DSA in C++",
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-09-15T14:12:05Z",
  updated_at: "2024-02-15T10:19:51Z",
};

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/customurl", (req, res) => {
  res.send("<h1>This is custom URL</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
