const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    res.setHeader('Content-Type',"text/html");

    if(pathname === "/"){
       
       
        fs.readFile("./index.html","utf8",(err,data)=>{
            if(err){
                res.statusCode = 404;
            }
            res.statusCode = 200;
            res.end(data)

        })
    }
    else if(pathname === "/about"){
        fs.readFile("./about.html","utf8",(err,data)=>{
            if(err){
                res.statusCode = 404;
            }
            res.statusCode = 200;
            res.end(data)

        })

    }
    else if(pathname === "/contact-me"){
            fs.readFile("./contact-me.html","utf8",(err,data)=>{
            if(err){
                res.statusCode = 404;
            }
            res.statusCode = 200;
            res.end(data)
        })
    }
    else{
        fs.readFile("./404.html","utf8",(err,data)=>{
            if(err){
                res.statusCode = 404;
            }
            res.statusCode = 200;
            res.end(data)

        })
    }
})


const PORT = 8080;

server.listen(PORT,()=>{
    console.log(`server listening on port: ${[PORT]}`)
})
