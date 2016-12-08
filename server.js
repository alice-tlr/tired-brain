var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var server = express()

// Middleware
server.engine('hbs', hbs({ // Register a view engine called 'hbs'
  extname: 'hbs', // Set the template file extention to '.hbs'
  defaultLayout: 'main.hbs' // Set the default layout to 'main.hbs'
}))
server.set('view engine', 'hbs') // Tell server to use 'hbs' view engine
// server.set('views', 'views')

// Routes
server.get('/', routes.getHome)

module.exports = server
