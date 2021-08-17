replaceStr = (str, replaceWhat, replaceTo) => {
  var re = new RegExp(replaceWhat, "g")
  return str.replace(re, replaceTo)
}

module.exports = {
  generateHeader: (headers) => {
    var key = Object.keys(headers)
    var keys = Object.keys(headers)
    var n = keys.length
    var newobj = {}
    while (n--) {
      key = keys[n]
      newobj[key.toLowerCase()] = headers[key]
    }
    delete newobj["host"]
    return newobj
  }
}