import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Home from './home.png';
import NewPost from './new_post.png';
import Logout from './logout.png'
import './nav.css';

class Nav extends Component {
    render (){
        console.log(this.props)
        if(this.props.location.pathname === '/'){
            return <> </>
        } else {
            return(

                <div className='nav-bar'>

                    <div>
                        <img id='profile-pic' src='https://robohash.org/tg' alt='profile pic'/>
                        <p id='username'>Hello {this.props.user.username}</p>
                        <img className='nav-icon' src={Home} alt='home'
                             onClick={() => this.props.history.push('/dashboard')}
                        />
                        <img className='nav-icon' src={NewPost} alt='new post'
                             onClick={() => this.props.history.push('/new')}
                        />
                    </div>

                    <img className='nav-icon' src={Logout} alt='logout'
                         onClick={() => axios.post('/auth/logout').then(()=>this.props.history.push('/'))}
                    />

                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return {user: state.reducer.user};
}

export default connect(mapStateToProps)(withRouter(Nav))
