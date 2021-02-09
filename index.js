const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const { mongoURI } = require('./config/dev');
const port = 5000;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
   mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'))

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});

app.listen(port, () => console.log(`${port}포트 에서 서버 가동`));