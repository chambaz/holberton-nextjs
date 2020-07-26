const base = require('airtable').base('appBE3or0aYN8aJFh')

export default (req, res) => {
  const posts = []

  base('Table 1')
    .select({
      maxRecords: 6,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach((record) => {
          const data = record.fields
          data.id = record.id
          posts.push(data)
        })

        fetchNextPage()
      },
      function done() {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(
          JSON.stringify({
            posts,
          })
        )
      }
    )
}
