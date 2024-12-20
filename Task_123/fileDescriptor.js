const fs = require("fs")

try{
    const fileDescriptor = fs.openSync('data.txt', 'w')
    fs.writeSync(fileDescriptor, "Hello, this is the first line.\n")
    fs.writeSync(fileDescriptor, "This is the second line.\n")
    fs.closeSync(fileDescriptor)
} catch(err) {
    console.error("Error", err)
}