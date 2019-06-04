import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        const postContainer = {
            height : '500px',
            overflow : 'auto'
        }
        console.log(this.props);
        const {posts} = this.props;
        const Post = posts.length ? (
            posts.map(post => {
                return (
                    <div className="card mb-1" key={post.id}>
                        <div className="card-header ">
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

const mapStateToProps = (state)=> {
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps)(Home);