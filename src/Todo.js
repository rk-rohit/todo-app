import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class Todo extends Component {
    constructor(props) {
		super(props);
		this.state = {
			todo_list : [
				{content : "This is fist todo", id:1},
				{content : "This is Second todo", id:2}
			]
		}
	}

    addTodo = (new_todo) => {
		new_todo.id = Math.random();
		const todo_list = [...this.state.todo_list, new_todo];
		this.setState({
			todo_list : todo_list
		});
	}

	deleteTodo = (id) => {
		let todo_list = this.state.todo_list.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todo_list
		})
    }
    
    render() {
        return (
            <div>
                <div className="col-md-12 text-center pt-3">
                    <h3>Todo App</h3>
                </div>
                <div className="col-md-12 pt-1">
                    <TodoList todo_list={this.state.todo_list} deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo}/>
                </div>
            </div>   
        )
    } 
}

export default Todo;