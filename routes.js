const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        fs.readFile('message.txt',{encoding :'utf-8'},(err,data) => {
            if(err){
                console.log(err);
            }
            res.write('<html>')
            res.write('<head><title>First page</title></head>')
            res.write('<body>')
            res.write(`<h3>${data}</h3>`)
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button>Save</button></form>')
            res.write('</body>')
            res.write('</html>')
            return res.end();
        })
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
}

// module.exports = requestHandler;

// module.exports ={
//     handler : requestHandler,
//     someText : "Have a nice day!"
// }

// module.exports.handler = requestHandler;

exports.handler = requestHandler;
