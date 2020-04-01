require('dotenv').config();

const server = require("./server.js");

const PORT = process.env.PORT || 7001;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
