import React from "react";
import {ITodoListItem} from "../interfaces";

export class TodoItem extends React.Component<{ item: ITodoListItem, onDelete: (id: number) => void; }, any>{

    render() {
        const item = this.props.item;
        return (
            <span className="todo-item">
                <span className="name" >{item.name}</span>
                    <button className="btn btn-delete" title="remove task from list"
                            onClick={() => this.props.onDelete(item.id)}>x</button>
            </span>
        );
    }
}