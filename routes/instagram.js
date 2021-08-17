const controller = require('../controllers/main')
const resources = require("../resources/instagram")

module.exports = (router) => {
	for (const [key, value] of Object.entries(resources.api)) {
		value.forEach(element => {
			if (element.method == 'GET') {
				router.get(element.alias, controller.request(element))
			} else if (element.method == 'POST') {
				router.post(element.alias, controller.request(element))
			} else if (element.method == 'PUT') {
				router.put(element.alias, controller.request(element))
			} else if (element.method == 'PATCH') {
				router.patch(element.alias, controller.request(element))
			} else if (element.method == 'DELETE') {
				router.del(element.alias, controller.request(element))
			}
		})
	}

	return router
}