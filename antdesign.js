var http = require('http'),
	url  = require("url"),
    path = require("path"),
    fs   = require("fs");

http.createServer(function(req,res){
	var pathname=__dirname+url.parse(req.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/src/index.html";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }
    console.log(path.extname(pathname));
    switch(path.extname(pathname)){
        case ".html":
            res.writeHead(200, {"Content-Type": "text/html"});
            break;
        case ".js":
            res.writeHead(200, {"Content-Type": "text/javascript"});
            break;
        case ".css":
            res.writeHead(200, {"Content-Type": "text/css"});
            break;
        case ".gif":
            res.writeHead(200, {"Content-Type": "image/gif"});
            break;
        case ".jpg":
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            break;
        case ".png":
            res.writeHead(200, {"Content-Type": "image/png"});
            break;
        default:
            res.writeHead(200, {"Content-Type": "application/octet-stream"});
    }
    fs.readFile(pathname,function (err,data){
        res.end(data);
    });
}).listen(3333);

console.log("server is start on port localhost:3333");