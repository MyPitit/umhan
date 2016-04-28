const GoogleSpreadsheet = require('google-spreadsheet')
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1SvJwTVqSLWvMMgIDpLg4INW1CAnFWoJ8hbarXFukwHc')

module.exports = {
  path: '/hello',
  method: 'GET',
  handler: (request, reply) => {
    doc.getInfo((err, spreadsheetObject) => {
      // console.log(spreadsheetObject)
    })
    doc.getCells(1, {
      'min-row': 1,
      'max-row': 1
    }, (err, cells) => {
      // console.log(cells)
    })
    doc.getRows(1, {}, (err, rows) => {
      // console.log(rows)
      const usersObj = rows.forEach((el) => {
        delete el._xml
        delete el.id
        delete el._links
      })
      reply(rows)
    })
  }
}
