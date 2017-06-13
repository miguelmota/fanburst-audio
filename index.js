const request = require('request')
const cheerio = require('cheerio')

function getStreamUrls(fanburstUrl) {
  return new Promise((resolve, reject) => {
    request({
      url: fanburstUrl
    }, (error, response, body) => {
      if (error) {
        return reject(error)
      }

      if (!body) {
        return resolve([])
      }

      const $ = cheerio.load(body)
      const result = []
      const attr = 'data-guid'

      $(`[${attr}]`).each((i, elem) => {
        const id = elem.attribs[attr]

        const streamUrl = `https://fanburst.com/stream/${id}?client_id=51938de2-772a-449a-984c-35ca26f38078`

        result.push(streamUrl)
      })

      resolve(result)
    })
  })
}

module.exports = {
  getStreamUrls
}
