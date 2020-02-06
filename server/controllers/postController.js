
module.exports = {

    getPosts: async (req, res) => {
        const {search, userposts} = req.query
        const {id} = req.params
        console.log(req.query)
        console.log(req.params)
        if(userposts === 'true' && search){
            console.log('hit1')
            const posts = await req.app.get('db').get_search_posts(search)
            return res.status(200).send(posts)
        }
        else if(userposts === 'false' && !search){
            console.log('hit2')
            const posts = await req.app.get('db').get_others_posts(id)
            return res.status(200).send(posts)
        }
        else if(userposts === 'false' && search){
            console.log('hit3')
            const posts = await req.app.get('db').get_others_searched(id, search)
            return res.status(200).send(posts)
        }
        else if(userposts === 'true' && !search){
            console.log('hit4')
            const posts = await req.app.get('db').get_posts()
            return res.status(200).send(posts)
        }
    },

    // getPosts: (req, res) => {
    //     const db = req.app.get('db');
    //     db.get_posts().then(data => res.status(200).send(data));
    // },

    getPost: async (req,res) => {
        const {id} = req.params
        const post = await req.app.get('db').get_post(id)
        return res.status(200).send(post)
    },

    addPost: async (req, res) => {
        const {id, title, img, content} = req.body
        console.log(req.body)
        const post = await req.app.get('db').add_post(id, title, img, content)
        return res.sendStatus(200)
    }

}  


