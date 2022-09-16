import React from "react";
import {ITodoListItem} from "../interfaces";
import {TodoItem} from "./_todo-item.component";
import {List} from "../classes";

export class TodoList extends React.Component<{ listObject: List; }, { itemList: ITodoListItem[]; }> {

    constructor(props) {
        super(props);
        this.state = {itemList: this.props.listObject.theList};
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
    }

    onDeleteItem(id: number): void {
        const items = this.props.listObject;
        items.removeItem(id);
        this.setState({itemList: items.theList});
    }

    onEditItem(item: ITodoListItem): void {
        const items = this.props.listObject;
        items.updateItem(item);
        this.setState({itemList: items.theList})
    }

    render() {
        const items = this.state.itemList;
        return items.map(item => (
            <TodoItem key={item.id} item={item} onDelete={this.onDeleteItem} onEdit={this.onEditItem}/>
        ));
    }

}