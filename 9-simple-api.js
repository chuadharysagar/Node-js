let data = require("./data");

const http = require("http");
const { json } = require("stream/consumers");

http.createServer((req,resp)=>{
  resp.writeHead(200,{'Content-Type':'application\json'});
  resp.write(JSON.stringify(data));
  resp.end();
}).listen(5000);