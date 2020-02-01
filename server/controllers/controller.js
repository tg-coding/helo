const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        if (user[0]){
            return res.status(400).send('User already exists');
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(username, hash);

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        if(!user[0]) {
            return res.status(400).send('username not found');
        }

        let authenticated = bcrypt.compareSync(password, user[0].password);
        if(!authenticated) {
            return res.status(401).send('Password is incorrect');
        }

        delete user[0].password;
        req.session.user = user[0];
        console.log(req.session.cookie);
        res.status(202).send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },

    getUser: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('No user on session');
        }
    },

    getPosts: (req, res) => {
        const db = req.app.get('db');
        db.get_posts().then(data => res.status(200).send(data));
    },

    getPostInfo: async (req, res) => {
        console.log('hit')
        const db = req.app.get('db');
        const postInfo = await db.post_info();
        return res.status(200).send(postInfo)
    }
}
