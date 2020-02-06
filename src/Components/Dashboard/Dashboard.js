import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../../ducks/reducer";
// import {Link} from 'react-router-dom';
import axios from "axios";
import Posts from "../Posts/Posts";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      userPosts: true,
      posts: []
    };
  }

  toggleMyPosts = e => {
    this.setState({
      userPosts: !this.state.userPosts
    });
    this.reRender();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  search = () => {
    this.reRender();
  };

  reset = () => {
    this.setState({ searchInput: "" });
    this.reRender();
  };

  componentDidMount() {
    this.reRender();
  }

  reRender = () => {
    const { id } = this.props.user;
    const { searchInput, userPosts } = this.state;
    axios
      .get("/auth/user")
      .then(res => {
        //   console.log(res.data)
        if (res.data === "No user on session") {
          this.props.history.push("/");
        } else {
          this.props.getUser(res.data);
        }
        axios
          .get(`/api/posts/${id}?search=${searchInput}&userposts=${userPosts}`)
          .then(res => {
            console.log(res.data);
            this.setState({ posts: res.data });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="searchbar-container">
          <div className="searchbar">
            <input
              id="searchbar-input"
              name="searchInput"
              value={this.state.searchInput}
              onChange={e => this.handleChange(e)}
            />
            <button id="search-btn" onClick={() => this.search()} />
            <button id="reset-btn" onClick={() => this.reset()}>Reset</button>
          </div>
          <div className="my-posts-container">
            <p>My Posts</p>
            <input
              name="myPostsInput"
              type="checkbox"
              onChange={e => this.toggleMyPosts(e)}
              checked={this.state.userPosts}
            />
          </div>
        </div>

        <div className="post-container">
          {this.state.posts.map(element => {
            return (
              <Posts
                key={element.id}
                postInfo={element}
                reRender={this.reRender}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.reducer.user };
}

export default connect(mapStateToProps, { getUser })(withRouter(Dashboard));
