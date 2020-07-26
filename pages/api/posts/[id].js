const base = require('airtable').base('appBE3or0aYN8aJFh')

export default async (req, res) => {
  const id = req.query.id
  let post = {}

  await base('Table 1').find(id, async function (err, record) {
    if (err) {
      console.error('Error fetching post')
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')

    post = record.fields
    post.id = record.id

    if (req.method === 'POST') {
      update(post, res)
    } else {
      res.end(JSON.stringify({ post }))
    }
  })
}

function update(post, res) {
  base('Table 1').update(
    [
      {
        id: post.id,
        fields: {
          liked: !post.liked,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function (record) {
        post = record.fields
      })

      res.end(JSON.stringify({ post }))
    }
  )
}
