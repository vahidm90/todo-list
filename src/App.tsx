import './App.css';
import React from 'react';
import {TodoForm} from "./components";
import {TodoItemsList} from "./components/_todo-items-list";
import {TodoList} from "./classes";
import {IToDo} from "./interfaces";

class App extends React.Component<{}, {list: TodoList }> {

    constructor(props) {
        super(props);
        this.state = {list: new TodoList()}
    }

    onTodoAdd: (newItem: IToDo) => void = item => {
        const list = this.state.list;
        list.addItem({name: item.name, description: item.description})
        this.setState({list});
    }


    render() {
        return (
            <div className="App">
                <h1>Vahid's First React app! - A to-do list</h1>
                <TodoForm name={''} description={''} onAddNewItem={this.onTodoAdd} />
              <TodoItemsList items={this.state.list} />
            </div>
        );
    }
}

export default App;
