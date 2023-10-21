const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Back End Is The Greatest In The World!!')
})

app.listen(3000)