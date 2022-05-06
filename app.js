const express = require('express')
const bodyParser = require('body-parser')
const handleCase = require('./handlers')
const http = express();

http.use(bodyParser.json())
http.use(bodyParser.urlencoded({ extended: true }))

const port = 8000;

http.get('/', (request, response) => {
    const message = handleCase('the case')
    response.send(message);
})
http.post('/post', (request, response) => {
    console.log(request.body.name)
    response.send('handled')
})

http.listen(port, function(err) {
    if(err) {
        return console.error(err); 
    }
    console.log(`Listening on: http://localhost:${port}`)
})