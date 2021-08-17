const restify = require('restify')
var Router = require('restify-router').Router

var router = new Router()
const server = restify.createServer()
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

router.add('/instagram', require('./routes/instagram')(new Router()))

router.applyRoutes(server)

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at:', reason.stack || reason)
})

server.listen(3000, () => console.log('%s listening at %s', server.name, server.url))