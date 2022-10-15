const express = require('express')
const cors=require("cors")
// const https = require('https')
// const path = require('path')
// const fs = require('fs')
const app = express()

const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

let routes = require('./api/routes')
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

// const sslServer = https.createServer({
//     key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//     cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
// }, app)

// sslServer.listen(port)
app.listen(port)

console.log('RESTful API server started on: ' + port);