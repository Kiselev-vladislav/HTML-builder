const fs = require('fs')
const EventEmitter = require('events')
const path = require('path');

const dir = path.join(__dirname, 'text.txt')
const filename = path.basename(__filename)



const emiter = new EventEmitter();
const ReadStream = fs.createReadStream(dir)
const dirname = path.join(__dirname, '/01-read-file')


// console.log(dir)

ReadStream.on('data', (text) => {
    console.log(text.toString())
})



// emiter.on('read', (dirname) => {
//     fs.readFile('./text.txt', (erorr, data) => {
//         console.log(data.toString())
//     })
// })

// emiter.emit('read', dirname )



// ReadStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })

// fs.readFile('./text.txt', (erorr, data) => {
//     console.log(data.toString())
// })