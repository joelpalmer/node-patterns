const tar = require('tar');
const fstream = require('fstream');
const path = require('path');

const destination = path.resolve(process.argv[2]).toString();
const sourceA = path.resolve(process.argv[3]).toString();
const sourceB = path.resolve(process.argv[4]).toString();

const pack = new tar.Pack();
pack.pipe(fstream.Writer(destination));

let endCount = 0;
function onEnd() {
    if (++endCount === 2) {
        pack.end();
    }
}

const sourceStreamA = fstream.Reader({type: "Directory", path: sourceA})
    .on('end', onEnd);

const sourceStreamB = fstream.Reader({type: "Directory", path: sourceB})
    .on('end', onEnd);

sourceStreamA.pipe(pack, {end: false});
sourceStreamB.pipe(pack, {end: false});


