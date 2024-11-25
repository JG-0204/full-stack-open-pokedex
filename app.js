/* eslint-disable no-undef */
const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// a change
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('health check success')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
