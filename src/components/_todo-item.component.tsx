import React from "react";
import {ITodoListItem} from "../interfaces";

export class TodoItem extends React.Component<{ item: ITodoListItem, onDelete: (id: number) => void; }, {isExtended: boolean;}>{

    constructor(props) {
        super(props);
        this.state = {isExtended: false};
    }

    render() {
        const item = this.props.item;
        const description = this.state.isExtended ? <p className="description">{item.description}</p> : '';
        return (
            <div className="todo-item">
                <h2 className="name" >{item.name}</h2>
                    <button className="btn btn-delete" title="remove task from list"
                            onClick={() => this.props.onDelete(item.id)}>x</button>
                <button onClick={() => this.setState({isExtended: !this.state.isExtended})}>...</button>
                {description}
            </div>
        );
    }
}