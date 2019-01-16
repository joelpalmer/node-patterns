process.stdin
    .on('readable', () => {
        let chunk;
        console.log('New data avail');
        while((chunk = process.stdin.read()) !== null) {
            console.log(
                `Chunk read: (${chunk.length}) "${chunk.toString()}"`
            );
        }
    })
    .on('end', () => process.stdout.write('End of stream'));