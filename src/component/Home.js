import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    state = {
        post : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                post : res.data.slice(0, 10)
            })
        });
    }

    render() {
        const postContainer = {
            height : '500px',
            overflow : 'auto'
        }
        const {post} = this.state;
        const Post = post.length ? (
            post.map(post => {
                return (
                    <div className="card mb-1" key={post.id}>
                        <div className="card-header">
                            <Link to={"/" + post.id}>{post.title}</Link>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No Post Found.</div>
        )
        return (
            <div>
                <h3>Home</h3>
                <div style={postContainer}>
                    {Post}
                </div>
            </div>   
        )
    }
}

export default Home;