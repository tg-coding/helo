import React, {Component} from 'react';
import axios from 'axios';
import Post from '../Post/Post'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            searchInput: '',
            myPostsToggle: true,
            posts: []
        }
    }

    toggleMyPosts = () => {
        this.setState({
            myPostsToggle: !this.state.myPostsToggle
        })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    reset = () => {
        this.setState({
            searchInput: ''
        });
    };

    componentDidMount() {
        this.reRender()
    }

    reRender = () => {
        axios.get('/api/posts').then(res => this.setState({
            posts: res.data
        }))
    }

    

    render (){
        return(
            <div>
                <div className='searchbar-container'>
                    <div className='searchbar'>
                        <input
                            name='searchInput'
                            value={this.state.searchInput}
                            onChange={e => this.handleChange(e)}
                        />
                        <button id='search-btn'>Search</button>
                        <button id='reset-btn'onClick={() => this.reset()}>Reset</button>
                    </div>
                    <div className='my-posts-container'>
                        <p>My Posts</p>
                        <input 
                            name='myPostsInput'
                            type='checkbox'
                            onChange={() => this.toggleMyPosts()}
                            checked={this.state.myPostsToggle}
                        />
                    </div>
                </div>

                <div className='post-container'>
                    {this.state.posts.map(element => {
                        return <Post
                                    key={element.id}
                                    postInfo={element}
                                    reRender={this.reRender}
                            />
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard