require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(express.json())

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('DB connected!')
    app.listen(SERVER_PORT, () => console.log(`WOW, SO MUCH SERVER ON PORT: ${SERVER_PORT}!`))
}).catch(err => console.log(err))


