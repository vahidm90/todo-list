import './App.css';
import React from 'react';
import {TodoForm} from "./components";
import {ITodoListItem} from "./interfaces";
import TodoList from "./classes/_todo-list.class";

class App extends React.Component<any, {list: ITodoListItem[] }> {

    private _todoList!: TodoList;

    constructor(props) {
        super(props);
        this._todoList = new TodoList();
        this.state = {list: this._todoList.theList}
    }

    onTodoAdd: () => void = () => {
        this._todoList.addItem({name: '', description: ''})
    }


    render() {
        return (
            <div className="App">

                <h1>Vahid's First React app! - A to-do list</h1>
                <TodoForm onAddNewItem={this.onTodoAdd} />
              <ul>{theList.theList.map(item => (
                    <li key={item.id} title={item.description}>
                        <p>{item.name}
                            <button title="remove task from list" onClick={() => removeTask(item.id)}>x</button>
                        </p>
                    </li>
                ))}</ul>
            </div>
        );
    }
}

export default App;
