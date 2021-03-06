const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const activitiesRouter = require("./activities/activities_router.js");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const employeesRouter = require('./employees/employees-router.js')
const restricted = require("./auth/restricted-middleware.js");

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/activities", activitiesRouter);

server.use("/api/auth", authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/employees', employeesRouter);

server.get("/", (req, res) => {
  const evironment = process.env;
  const port = process.env.PORT || 7001;
  res.status(200).json({ api: "up", port, evironment });
});

module.exports = server;
