const axios = require('axios');

module.exports = {
	request: async (options) => {
		try {
			var {
				status,
				data
			} = await axios.request(options)
			return {
				status: status,
				data: data
			}

		} catch (error) {
			if (error.response) {
				let data_error = {
					status: error.response.status,
					data: error.response.data
				}
				return data_error
			}

			return error
		}
	},
}