import React from "react";
import {ITodoListItem} from "../interfaces";
import {TodoItem} from "./_todo-item.component";
import {TodoList} from "../classes";

export class TodoItemsList extends React.Component<{ items: TodoList; }, { items: ITodoListItem[]; }> {

    constructor(props) {
        super(props);
        this.state = {items: this.props.items.theList};
        this.onTodoItemDelete = this.onTodoItemDelete.bind(this);
    }

    onTodoItemDelete(id: number): void {
        const items = this.props.items;
        items.removeItem(id);
        this.setState({items: items.theList});
    }

    render() {
        const items = this.state.items;
        return items
            .map(item => (<TodoItem key={item.id} item={item} onDelete={this.onTodoItemDelete.bind(this, item.id)}/>));
    }

}