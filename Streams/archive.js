const combine = require("multipipe");
const fs = require("fs");
const compressAndEncryptSteam = require("./combinedStreams").compressAndEncrypt;

combine(
  fs
    .createReadStream(process.argv[3])
    .pipe(compressAndEncryptSteam(process.argv[2]))
    .pipe(fs.createWriteStream(process.argv[3] + ".gz.enc"))
).on("error", err => {
  console.log(err);
});
