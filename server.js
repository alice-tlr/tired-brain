
var express = require('express')

var routes = require('./routes')

var server = express()


server.get('/', routes.getHome)

module.exports = server
