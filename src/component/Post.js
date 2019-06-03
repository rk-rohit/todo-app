import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post : null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res=> {
                this.setState({
                    post : res.data
                })
            })
    }
    render() {
        const post_data = this.state.post ? (
            <div className="post">
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="post">Loading...</div>
        )
        return (
            <div className="container">
                {post_data}
            </div>
        )
    }
}

export default Post;