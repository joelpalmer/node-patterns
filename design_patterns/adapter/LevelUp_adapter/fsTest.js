const levelup = require('level');
const fsAdapter = require('./fsAdapter');
const db = levelup('./fsDB', {valueEncoding: 'binary'});
const fs = fsAdapter(db);

fs.writeFile('file1.txt', 'Hello!', () => {
    fs.readFile('file1.txt', {encoding: 'utf8'}, (err, res) => {
        console.log(res);
    });
});

fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(err);
});