const express = require('express')
const app = express()
const port = 3000
const movies = require('./movies')



app.use(express.json());
app.use('/api/v1/movies', movies);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})