const express = require("express");
const { createServer } = require("http");
const { createServer: createHttpsServer } = require("https");
const next = require("next");
const fs = require("fs");
require("dotenv").config();

const port =
  process.env.NEXT_ENV === "development"
    ? process.env.NEXT_PORT_DEV
    : process.env.NEXT_PORT_PROD;

console.log(port);
const dev = process.env.NEXT_ENV !== "production";
const app = next({ dev, port});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  if (dev) {
    // In development, use HTTP
    createServer(server).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  } else {
    // In production, use HTTPS
    const httpsOptions = {
      key: fs.readFileSync('/root/key/priyeshportfolio.info.key'),
      cert: fs.readFileSync('/root/key/priyeshportfolio.info.pem'),
    };

    createHttpsServer(httpsOptions, server).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port}`);
    });
  }
});
