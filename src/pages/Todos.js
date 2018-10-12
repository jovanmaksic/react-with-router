import React from 'react';

import Todo from "../shared/Todo";
import TodoStore from "../stores/TodoStore";



export default class Todos extends React.Component {
    constructor(){
        super();
        this.state= {
            todos: TodoStore.getAll(),            
        }
    }

    componentWillMount() {
        TodoStore.on("change", () =>{
            this.setState({
                todos: TodoStore.getAll(),
            })
        })
    }

    render() {        
        const { todos } = this.state;
        console.log(todos);
        const TodoComponenets = todos.map((todo) =>{
            return <Todo key={todo.id} {...todo}/>;
        })



        return (
            <div>                
                <h1 className="mt-5">Todo List</h1>
                <ul>{TodoComponenets}</ul>
            </div>
        )
    }
}