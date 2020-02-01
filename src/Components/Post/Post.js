import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Post extends Component {
    

    
    render (){
        if(this.props.location.pathname === '/dashboard'){
            return(
                
                <div className='dash-post-container'>
                    <p>{this.props.postInfo.title}</p>
                    <div className='dash-post-author-info'>
                        <p className='post-author'>Hello</p>
                        <img className='author-profile-pic' alt='author profile pic'
                             src=''
                        />
                    </div>
                </div>
                )
        } else {
            return(
            <div>Post</div>
            )
        }
    }
}

export default withRouter(Post)