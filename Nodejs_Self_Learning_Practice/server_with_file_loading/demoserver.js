const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('night.html',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.writeHead(200,{'content-type':'text/html'})
            console.log(req.url)
            res.write(data)
            res.end()
        }
    })
}).listen(4000)
console.log('server started on 4000')
