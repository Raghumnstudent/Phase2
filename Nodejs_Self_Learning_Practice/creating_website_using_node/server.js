var http = require('http')
var fs = require('fs')
var url = require('url') 
const PORT = process.env.PORT || 5000 
http.createServer(function(req,res){
    var q = url.parse(req.url,true) //taking the url request storing in q checking the format by printing q 
    // console.log(q)
    //q.pathname = /filename if you pass localhost:5000/index.html  
    var filename = "." +q.pathname 
    if (filename =="./"){
        filename = './index.html'
    }
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/html'})
            res.write('404 Not found')
            return res.end();
        } 
        res.writeHead(200,{'content-type':'text/html'})
        console.log(req.url) //printing request url
        res.write(data)
        return res.end()
    })
}).listen(PORT)
console.log('Server listening on 5000..... ')