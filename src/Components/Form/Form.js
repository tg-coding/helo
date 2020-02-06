import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer';

class Form extends Component {
    constructor(){
        super()
        this.state={
            title: '',
            img: '',
            content: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // submit = (img, title, content) => {
    //     axios.post(`/api/post`, {img, title, content}).then(() => {
    //         this.props.history.push('/dashboard')
    //     })
    // }

    submit = () => {
        console.log(this.props.user.user)
        const {title, img, content} = this.state
        const {id} = this.props.user.user
        axios.post('/api/post', {title, img, content, id}).then(() => {
            this.props.history.push('/dashboard')
        })
    }

    render (){
        const {title, img, content} = this.state
        return(
            <div className='form-container'>
                
                <p id='new-post-text'>New Post</p>

                <div className='form-input-container'>

                    <p className='form-input-labels'>Title:</p>
                    <input 
                        name='title'
                        value={title}
                        onChange={e=>this.handleChange(e)}
                        placeholder='Title'
                    />
                    <img
                        src={img || 'https://fakeimg.pl/440x320/282828/eae0d0/?retina=1'}
                        alt='image preview'
                        className='image-preview'
                    />
                    <p className='form-input-labels'>Image URL:</p>                   
                    <input 
                        name='img'
                        value={img}
                        onChange={e=>this.handleChange(e)}
                        placeholder='Image URL'
                    />             
                    <p className='form-input-labels'>Comments:</p>
                    <textarea 
                        name='content'
                        value={content}
                        onChange={e=>this.handleChange(e)}
                    />

                </div>

                <button className='submit-form-btn' onClick={() => this.submit(title, img, content)}>
                    Post
                </button>

            </div>
        )
    }
}

// export default Form
function mapStateToProps(state){
    return {user: state.reducer};
}
export default connect(mapStateToProps, {getUser})(Form);