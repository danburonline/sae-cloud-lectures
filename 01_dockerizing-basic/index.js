const express = require('express')
const app = express()

app.get('/', (_request, response) => {
  response.send('Hello Fern!')
})

app.listen(3000, () => {
  console.log('server is listening on port http://localhost:3000')
})
