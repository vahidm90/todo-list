import React from "react";
import {IAddTodoForm} from "../interfaces";

const defaultTodoFormProps: IAddTodoForm = {
    description: '',
    name: '',
    onAddNewItem: () => {},
};

export class TodoForm extends React.Component<Partial<IAddTodoForm>, any> {

    constructor(props) {
        super({...defaultTodoFormProps, ...props});
    }

    onFormSubmit: (e) => void = () => {
        this.props.onAddNewItem();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Task Name..." value={this.props.name}/>
                <textarea placeholder="Task Description..." value={this.props.description}></textarea>
                <button type="submit">Add</button>
            </form>
        );
    }

}