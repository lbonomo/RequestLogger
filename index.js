const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000

/**
 * 
 * @param {*} req 
 * @returns 
 */
function log(req) {
    let data = {
        'status': 'successful',
        'request': {
            'url': req.url,
            'method': req.method,
            'body': req.body
        }
    }
    console.log(data)
    return data
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.all('*', (req, res) => {
    res.send(log(req))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
