require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const ctrl = require('./controllers/controller');

const app = express();

app.use(express.json());
app.use(cors());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
    })
);

// auth endpoints
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.post('/auth/logout', ctrl.logout);
app.get('/auth/user', ctrl.getUser);


app.get('/api/posts', ctrl.getPosts);
app.get('/api/postinfo', ctrl.getPostInfo);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
});


