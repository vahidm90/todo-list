import React from "react";
import {IToDo} from "../interfaces";

export class TodoForm extends React.Component<any, IToDo> {

    constructor(props) {
        super(props);
        this.state = {name: this.props.name, description: this.props.description};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    onFormSubmit(e): void {
        e.preventDefault();
        const item = this.state;
        this.props.onAddNewItem({name: item.name, description: item.description});
        this.setState({name: '', description: ''})
    }

    onNameChange(e): void {
        this.setState({name: e.target.value, description: this.state.description})
    }

    onDescriptionChange(e): void {
        this.setState({name: this.state.name, description: e.target.value})
    }

    render() {

        const item = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Task Name..." value={item.name} onChange={this.onNameChange} required/>
                <textarea placeholder="Task Description..." value={item.description}
                          onChange={this.onDescriptionChange}></textarea>
                <button type="submit">Add</button>
            </form>
        );
    }

}