const http = require("http");
let data = [];
const server = http.createServer((req, res) => {
if (req.method === "GET") {
res.write(JSON.stringify(data));
res.end(); }
else if (req.method === "POST") {
let body = "";
req.on("data", chunk => {
body += chunk;
});
req.on("end", () => {
data.push(JSON.parse(body));
res.write("Data added");
res.end();
});   }
});
server.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});