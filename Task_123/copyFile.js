const fs = require('fs');

try {
    const sourceFile = fs.openSync('data.txt', 'r');
    const destFile = fs.openSync('copy.txt', 'w');

    const buffer = Buffer.alloc(16);
    let bytesRead;

    do {
        bytesRead = fs.readSync(sourceFile, buffer, 0, buffer.length, null);
        fs.writeSync(destFile, buffer, 0, bytesRead);
    } while (bytesRead > 0);

    fs.closeSync(sourceFile);
    fs.closeSync(destFile);

    console.log("File content copied from 'data.txt' to 'copy.txt'.");
} catch (err) {
    console.error("An error occurred:", err);
}