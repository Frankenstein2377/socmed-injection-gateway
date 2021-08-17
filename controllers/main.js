const rp = require("../services/request")
const helper = require("../helpers/main")

module.exports = {
  request: (element) => {
    return async (req, res, next) => {
      try {
        var options = {
          url: element.resource,
          params: req.query,
          method: element.method,
          headers: helper.generateHeader(req.headers),
        }

        let response = await rp.request(options)
        console.log(response)
        res.send(response)

        return next()
      } catch (err) {
        res.send(500, {
          code: 500,
          message: "Ops! Internal server error, please contact support",
          result: err,
        })

        return next()
      }
    }
  }
}