const fs = require("fs")

try{
    const fileDescriptor = fs.openSync('data.txt', 'r')
    const buffer = Buffer.alloc(64)
    const bytesRead = fs.readSync(fileDescriptor, buffer, 0, buffer.length, 0)
    console.log("File content: ", buffer.toString('utf-8', 0, bytesRead))
    fs.closeSync(fileDescriptor)
    console.log("file has been read")
} catch(err) {
    console.error("Error: ", err)
}