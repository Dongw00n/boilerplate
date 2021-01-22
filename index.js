const express = require('express')
const app = express()
const port = 7001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dongwoon:abcd1234@boilerplate.gwhhr.mongodb.net/atlas?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

