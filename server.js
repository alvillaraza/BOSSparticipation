const express = require("express");
const helmet = require("helmet");

const activitiesRouter = require("./activities/activities_router.js");
const usersRouter = require("./users/users-router.js");


const server = express();
server.use(express.json());

server.use(helmet());

server.use("/api/activities", activitiesRouter);
server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
  const evironment = process.env;
  const port = process.env.PORT || 7001;
  res.status(200).json({ api: "up", port, evironment });
});

module.exports = server;
