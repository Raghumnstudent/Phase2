//part  1
 /* creating the server and loading the server side file 
 into browser */


//  from the client side he is requesting server index.html file from their url localhost:3500/index.html

const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-Type':'text/html'})
        console.log(req.url) //printing request url
        res.write(data)
        res.end()
    })
}).listen(3500)
console.log('Server listening on 3500..... ')




// part 2 loading the different files
// like localhost:3500/index.html, localhost:3500/day.html, localhost:3500/night.html

// if the file is not there it gives error 
// like localhost:3500/raghu.index.html

// const http = require('http')
// const fs = require('fs')
// const url = require('url') 
// http.createServer(function(req,res){
//     var q = url.parse(req.url,true) //taking the url request storing in q checking the format by printing q 
//     // console.log(q)
//     var filename = "." +q.pathname  
//     if (filename =="./"){
//         filename = './index.html'
//     }
//     fs.readFile(filename,(err,data)=>{
//         if(err){
//             res.writeHead(404,{'content-Type':'text/html'})
//             res.write('404 Not found')
//             return res.end();
//         } 
//         res.writeHead(200,{'content-Type':'text/html'})
//         console.log(req.url) //printing request url
//         res.write(data)
//         return res.end()
//     })
// }).listen(3500)
// console.log('Server listening on 3500..... ')

// part 3 Removing the html extention from url

http = require('http')
const fs = require('fs')
const url = require('url') 
http.createServer(function(req,res){
    var q = url.parse(req.url,true) //taking the url request storing in q checking the format by printing q 
    // console.log(q)
    var filename = "." +q.pathname  
    if (filename =="./"){
        filename = './index'
    }
    filename = filename+".html"
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-Type':'text/html'})
            res.write('404 Not found')
            return res.end();
        } 
        res.writeHead(200,{'content-Type':'text/html'})
        console.log(req.url) //printing request url
        res.write(data)
        return res.end()
    })
}).listen(3500)
console.log('Server listening on 3500..... ')

