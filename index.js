import http from 'http';
const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Halo dari CI/CD Cloud Shell!');
}).listen(PORT, () => console.log(`Server running on port ${PORT} `) );