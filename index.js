const express = require('express');
const app = express()
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/card', (req, res) => {
    res.sendFile(__dirname + '/public/card.html')
})

app.listen(3000, () => {
    console.log('Server running')
})
