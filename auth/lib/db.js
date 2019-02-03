const level = require('level');
const subLevel = require('level-sublevel');

module.exports = subLevel(
    level('example-db', {valueEncoding: 'json'})
);