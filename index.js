const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const httpServer = http.createServer(app)
const cors = require('cors')
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.options('*', cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get("/", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

httpServer.listen(process.env.PORT || 3001)
