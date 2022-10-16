const http = require("http");
const app = require("./src/app.js");

const port = 4000;

const server = http.createServer(app);
var path = require("path");
global.appRoot = path.resolve(__dirname);

server.listen(port||'5000', () => {
  console.log(`Server is live on port ${port}.`);
  console.log(`http://localhost:${port}`);
});
