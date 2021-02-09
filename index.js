const express = require('express')
const mongoose = require('mongoose');

const app = express()
mongoose.connect('mongodb+srv://soongu:<jsg76049316!>@boilerplate.pefba.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log);

const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
 
app.listen(port, () => console.log(`${port}포트 에서 서버 가동`));