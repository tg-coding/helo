import React from 'react';
import {withRouter} from 'react-router-dom';
// import axios from 'axios';

function Posts (props){
    // console.log(props)
    const {id, title, username, profile_pic} = props.postInfo
    return(
        <div className='dash-post-container'
            onClick={() => props.history.push(`/post/${id}`)}
            >
                 <p>{title}</p>
                <div className='dash-post-author-info'>
                    <p className='post-author'>{username}</p>
                     <img className='author-profile-pic' alt='author profile pic'
                            src={profile_pic}
                    />
                </div>
            </div>
    )
}

 

// class Posts extends Component {
    
//     render (){
//         return(
//             <div className='dash-post-container'
//             onClick={() => this.props.history.push(`/post/${this.props.postInfo.id}`)}
//             >
//                 <p>{this.props.postInfo.title}</p>
//                 <div className='dash-post-author-info'>
//                     <p className='post-author'>{this.props.postInfo.username}</p>
//                     <img className='author-profile-pic' alt='author profile pic'
//                             src={this.props.postInfo.profile_pic}
//                     />
//                 </div>
//             </div>
//         )
       
//     }
// }

export default withRouter(Posts)