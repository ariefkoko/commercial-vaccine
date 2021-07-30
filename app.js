const express = require('express');
const app = express()
const port = 3000;
const router = require('./routes')
var session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')
app.use( express.static( "public" ) );
app.use(express.urlencoded({ extended:false }))
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})