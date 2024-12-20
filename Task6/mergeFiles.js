const fs = require("fs")

fs.writeFileSync('file1.txt', "Content of the first file.\n")
fs.writeFileSync('file2.txt', "Content of the second file.\n")

const content1 = fs.readFileSync('file1.txt')
const content2 = fs.readFileSync('file2.txt')

const mergedContent = Buffer.concat([content1, content2])

fs.writeFileSync('merged.txt', mergedContent)

console.log("Files has been merged")