const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('HEY!')
})
app.listen(4000, () => console.log('Server running on port 3000'))




