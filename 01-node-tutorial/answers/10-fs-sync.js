const {readFileSync, writeFileSync} = require('fs')

writeFileSync('./temporary/fileA.txt',`Hello, I love you `, {flag: 'a'})
const fileA = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(fileA)