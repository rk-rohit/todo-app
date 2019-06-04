import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    handleClick = ()=> {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }
    render() {
        const post_data = this.props.post ? (
            <div className="post">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className="btn btn-primary" onClick={this.handleClick}>Delete Post</button>
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

const mapStateToProps = (state, ownProps)=> {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        deletePost : (id)=> { dispatch({type : 'DELETE_POST', id : id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);