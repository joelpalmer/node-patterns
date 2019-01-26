const ToFileStream = require('./toFileStream');
const tfs = new ToFileStream();

tfs.write({path: "file1.txt", content: "hello"});
tfs.write({path: "file2.txt", content: "to"});
tfs.write({path: "file3.txt", content: "you"});
tfs.end(() => console.log('All files created'));