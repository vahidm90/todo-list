import React from "react";
import {IToDo} from "../interfaces";

export class TodoForm extends React.Component<any, IToDo> {

    // private _isEdit!: boolean;
    private _formRef = React.createRef<HTMLFormElement>();

    constructor(props) {
        super(props);
        this.state = {name: this.props.name, description: this.props.description};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onTextAreaKeydown = this.onTextAreaKeydown.bind(this);
    }

    resetForm(): void {
        this.setState({name: '', description: ''})
    }

    onFormSubmit(e): void {
        e.preventDefault();
        this.emitData();
        this.resetForm();
    }

    onNameChange(e): void {
        this.setState({name: e.target.value, description: this.state.description})
    }

    onDescriptionChange(e): void {
        this.setState({name: this.state.name, description: e.target.value})
    }

    onTextAreaKeydown(e): void {
        if ((e.key !== "Enter") || !e.ctrlKey)
            return;
        e.preventDefault();
        this._formRef.current.requestSubmit();
    }

    emitData(): void {
        const item = this.state;
        this.props.onAddNewItem({name: item.name, description: item.description});
    }

    render() {

        const item = this.state;
        return (
            <form onSubmit={this.onFormSubmit} ref={this._formRef}>
                <input type="text" placeholder="Task Name..." value={item.name} onChange={this.onNameChange} required/>
                <textarea placeholder="Task Description..." value={item.description}
                          onKeyDown={this.onTextAreaKeydown} onChange={this.onDescriptionChange}></textarea>
                <button type="submit">Add</button>
            </form>
        );
    }

}