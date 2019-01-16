const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log(`File received: ${filename}`);
  req
    .pipe(crypto.createDecipher('aes-192-gcm', "a_shared_secret"))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on("finish", () => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end("That's it\n");
      console.log(`File saved: ${filename}`);
    });
});
server.listen(3000, () => console.log("Listening"));
