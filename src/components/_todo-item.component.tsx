import React from "react";
import {ITodoListItem, ITodoListItemProps, ITodoListItemState} from "../interfaces";
import {TodoForm} from "./_todo-form.component";

export class TodoItem extends React.Component<ITodoListItemProps, ITodoListItemState>{

    constructor(props) {
        super(props);
        this.state = {isExtended: false, isEditing: false};
        this.onExtendButtonClick = this.onExtendButtonClick.bind(this);
        this.onEditButtonClick = this.onEditButtonClick.bind(this);
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onExtendButtonClick(): void {
        this.setState({isExtended: !this.state.isExtended});
    }

    onEditButtonClick(): void {
        this.setState({isEditing: !this.state.isEditing})
    }

    onDeleteButtonClick(): void {
        this.props.onDelete(this.props.item.id)
    }

    onEditSubmit(item: ITodoListItem): void {
        this.props.onEdit(item);
        this.setState({isEditing: false});
    }

    render() {
        const item = this.props.item;
        const state = this.state;
        const description = state.isExtended && <p className="description">{item.description}</p>;
        const editForm = <TodoForm name={item.name} id={item.id} description={item.description}
                                   onEditItem={this.onEditSubmit}></TodoForm>
        return (
            <div className="todo-item">
                <h2 className="name" >{item.name}</h2>
                    <button className="btn btn-delete" title="remove task from list"
                            onClick={this.onDeleteButtonClick}>x</button>
                <button onClick={this.onExtendButtonClick}>...</button>
                {description}
                <button onClick={this.onEditButtonClick}>edit</button>
                {state.isEditing && editForm}
            </div>
        );
    }
}