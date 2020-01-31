import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    login = (username, password) => {
        axios.post('/auth/login', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })
    }

    register = (username, password) => {
        axios.post('/auth/register', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })
    }
    
    render (){
        const {username, password} = this.state
        return(
            <div className='login-container'>
                <img id='logo' src='' alt='logo-icon'/>
                <h1 id='logo-text'>Helo</h1>

                <div className='login-input'>
                    <p className='login-text'>Username: </p>
                    <input
                        name='username'
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                    />
                </div>

                <div className='login-input'>
                    <p className='login-text'>Password: </p>
                    <input
                        name='password'
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />
                </div>
                
                <div className='login-btn-container'>
                    <button onClick={() => this.login(username, password)}>Login</button>
                    <button onClick={() => this.register(username, password)}>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth