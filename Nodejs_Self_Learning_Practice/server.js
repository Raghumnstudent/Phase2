
// creating the server using http and sending message to browser listening on localhost:3000
const http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("<h1>Hello I am Raghu, I am sending the this message from server  to browser listening on 3000</h1>")
}).listen(3000)

console.log('server listening on 3000....')

