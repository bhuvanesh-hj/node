const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === '/home'){
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome Home</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/about'){
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome About us page</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/node'){
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Welcome node js project</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
})

server.listen(4000);