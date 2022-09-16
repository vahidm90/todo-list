import './App.css';
import React from 'react';
import {TodoForm, TodoList} from "./components";
import {List} from "./classes";
import {IToDo} from "./interfaces";

class App extends React.Component<{}, {list: List }> {

    constructor(props) {
        super(props);
        this.state = {list: new List()};
        this.onTodoAdd = this.onTodoAdd.bind(this);
    }

    onTodoAdd(newItem: IToDo): void {
        const list = this.state.list;
        list.addItem({name: newItem.name, description: newItem.description})
        this.setState({list});
    }


    render() {
        return (
            <div className="App">
                <h1>Vahid's First React app! - A to-do list</h1>
                <TodoForm onAddNewItem={this.onTodoAdd} />
              <TodoList listObject={this.state.list} />
            </div>
        );
    }
}

export default App;
