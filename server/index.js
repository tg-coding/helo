require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const authCtrl = require('./controllers/authController')
const postCtrl = require('./controllers/postController');

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
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/user', authCtrl.getUser);


app.get('/api/posts/:id', postCtrl.getPosts);
app.get('/api/post/:id', postCtrl.getPost);
app.post('/api/post', postCtrl.addPost);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
});