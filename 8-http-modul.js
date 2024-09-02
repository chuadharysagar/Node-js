const http = require("http");

http.createServer((req,resp)=>{
   resp.write("<h1>hello this is sagar chaudhary</h1>");
   resp.end();
}).listen(4500,()=>console.log("Server is running at 4500 port"));