import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            profilePic: '',
            title: '',
            img: '',
            content: ''
        }
    }
    componentDidMount = (props) => {
        axios.get(`/api/post/${this.props.match.params.id}`).then(res => {
            console.log(res.data[0])
            const {username, profile_pic, title, img, content} = res.data[0]
            this.setState({
                username,
                profilePic: profile_pic,
                title,
                img,
                content
            })
        }).catch(err=> console.log(err))
    }
    
    render (){
        console.log(this.state)
        const{username, profilePic, title, img, content} = this.state
            return(
                <div className='single-post-container'>
                    <div className='single-post-header'>
                        <p className='single-post-title'>{title}</p>
                        <div className='single-post-author-info'>
                            <p className='post-author'>{username}</p>
                            <img className='author-profile-pic' alt='author profile pic' src={profilePic}/>
                        </div>
                    </div>
                    <div className='single-post-content'>
                        <img className='post-img' alt='post-img' src={img} />
                        <p className='post-content-text'>{content}</p>
                    </div>
                </div>
            )
        }
    }

export default Post