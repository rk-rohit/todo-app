import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        }
    }

    handleInput = (e) => {
        this.setState({
            content : e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mt-2">
                        <input type="text" id="todo-content" onChange={this.handleInput} className="form-control" placeholder="Write Something" value={this.state.content} />
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary">Add Todo</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;