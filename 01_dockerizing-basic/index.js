const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('server is listening on port http://localhost:3000')
})
