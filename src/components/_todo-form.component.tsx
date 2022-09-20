import React from "react";
import {IToDo, ITodoFormProps} from "../interfaces";

export class TodoForm extends React.Component<ITodoFormProps, IToDo> {

    static defaultProps: Required<ITodoFormProps>;
    private readonly _isEdit!: boolean;
    private _formRef = React.createRef<HTMLFormElement>();

    constructor(props) {
        super(props);
        this.state = {name: this.props.name, description: this.props.description};
        this._isEdit = !!this.props.name && !!this.props.id;
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onTextAreaKeydown = this.onTextAreaKeydown.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
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

    onCancelEdit(): void {
        const props = this.props;
        props.onEditItem({id: props.id, name: props.name, description: props.description})
    }

    resetForm(): void {
        this.setState({name: '', description: ''})
    }

    emitData(): void {
        const item = this.state;
        const data = {name: item.name, description: item.description};
        const props = this.props;
        this._isEdit ? props.onEditItem({...data, id: props.id}) : props.onAddNewItem(data);
    }

    render() {

        const item = this.state;
        let formClasses = 'todo-form add-form';
        let btnTxt = 'Add';
        let cancelBtn = null;
        if (this._isEdit) {
            formClasses = 'todo-form edit-form';
            btnTxt = 'Apply';
            cancelBtn = <button onClick={this.onCancelEdit}>Cancel</button>;
        }
        return (
            <form className={formClasses} onSubmit={this.onFormSubmit} ref={this._formRef}>
                <input className="form-field name" type="text" placeholder="Task Name" value={item.name}
                       onChange={this.onNameChange} required/>
                <textarea className="form-field description" placeholder="Task Description" value={item.description}
                          onKeyDown={this.onTextAreaKeydown} onChange={this.onDescriptionChange}></textarea>
                <button className="btn submit-btn"  type="submit">{btnTxt}</button>{cancelBtn}
            </form>
        );
    }

}

TodoForm.defaultProps = {name: '', description: '', id: undefined, onAddNewItem: () => {}, onEditItem: () => {}};
