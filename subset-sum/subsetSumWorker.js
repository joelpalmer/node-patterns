const SubsetSum = require('./subsetSum');

process.on('message', msg => {
    const subsetSum = new SubsetSum(msg.sum, msg.set);
    subsetSum.on('match', data => {
        process.send({event: 'match', data});
    });
    subsetSum.on('end', data => {
        process.send({event: 'end', data});
    });

    subsetSum.start();
});