import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter{
    constructor(){
        super()
        this.todos = [
            {
                id: 112351891615,
                text: "Go shping",
                complete: false
            },
            {
                id: 178428916185,
                text: "Pay Water Bill",
                complete: false
            },
        ];
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false,
        });

        this.emit("change");
    }

    getAll(){
        return this.todos;        
    }

    handleAction(action){
        switch (action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = dispatcher;
export default todoStore;