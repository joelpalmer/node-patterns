const asyncModule = module.exports;

asyncModule.initialized = false;

asyncModule.initialize = callback => {
    setTimeout(function() {
        asyncModule.initialized = true;
        callback();
    }, 10000);
};

asyncModule.returnTime = callback => {
    process.nextTick(() => {
        if(!asyncModule.initialized) {
            return callback(
                new Error('Not ready to return time!')
            );
        }
        callback(null, 'Current time is: ' + new Date());
    });
};