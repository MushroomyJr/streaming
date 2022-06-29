const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.send('<h1>hello coconuts</h1>')
})

app.get('/help', (req, res)=>{
    res.send('what do we need help with coconuts')
})

app.listen(3000, ()=>{
    console.log('server live on port 3000')
})