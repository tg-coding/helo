import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from '../../ducks/reducer';
import axios from 'axios';
import Home from './home.png';
import NewPost from './new_post.png';
import Logout from './logout.png'
import './nav.css';

class Nav extends Component {


    logout() {
        axios.get('/auth/logout').then(() => {
          this.props.updateUser({});
        }).catch(err => console.log(err));
      }

    render (){
        // console.log(this.props)
        
        if(this.props.location.pathname === '/'){
            return <> </>
        } else {
            return(

                <div className='nav-bar'>

                    <div>
                        <img id='profile-pic' src={this.props.user.profile_pic || 'https://robohash.org/btg'} alt='profile pic'/>
                        <p id='username'>{this.props.user.username}</p>

                        <img className='nav-icon' src={Home} alt='home'
                             onClick={() => this.props.history.push('/dashboard')}
                        />
                        <img className='nav-icon' src={NewPost} alt='new post'
                             onClick={() => this.props.history.push('/new')}
                        />
                    </div>

                    <img className='nav-icon' src={Logout} alt='logout'
                         onClick={() => axios.post('/auth/logout')
                         .then(() => this.props.getUser({}))
                         .then(()=> this.props.history.push('/'))}
                    />

                </div>
            )
        }
    }
}

// function mapStateToProps(state){
//     console.log(state.reducer.id)
//     return {user: state.reducer.username, profilePic: state.reducer.profilePic};
// }

// export default connect(mapStateToProps, {getUser})(withRouter(Nav));

function mapStateToProps(state) {
    // console.log(state.reducer.user)
    return { user: state.reducer.user};
  }
  
  export default connect(mapStateToProps, {getUser})(withRouter(Nav));

