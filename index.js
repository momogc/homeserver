const express = require('express')
const config = require('config-lite')(__dirname)
const path = require('path')
const favicon = require('express-favicon')
var app = express()
app.get('/', function (req, res) {
    res.sendFile((path.resolve(__dirname, config.staticpath)) + '/index.html')
})
app.get('/resume', function (req, res) {
    res.sendFile(path.join(__dirname, '/resume.pdf'))
})
app.use(favicon(path.join(__dirname,'/favicon.ico')))
app.use(express.static(path.resolve(__dirname, config.staticpath)))
app.listen(config.port, function () {
    console.log(`${config.name} listening on port ${config.port}`)
})