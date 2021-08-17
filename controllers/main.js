const helper = require("../helpers/main")
const axios = require('axios')
const qs = require("qs")

module.exports = {
  request: (element) => {
    return async (req, res, next) => {
      try {
        var options = {
          url: element.resource,
          params: req.query,
          method: element.method,
          headers: helper.generateHeader(req.headers)
        }

        if (element.method == "GET") {
          options.params = req.query;
        } else if (
          element.method == "POST" ||
          element.method == "PUT" ||
          element.method == "PATCH"
        ) {
          if (
            "content-type" in options.headers &&
            options.headers["content-type"] ==
              "application/x-www-form-urlencoded"
          ) {
            options.data = qs.stringify(req.body);
          } else {
            options.data = req.body;
          }
        }

        let { status, data } = await axios.request(options)
        res.send({
          status: status,
          data: data
        })
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