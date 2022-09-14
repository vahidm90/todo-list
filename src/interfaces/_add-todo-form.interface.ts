import {IToDo} from "./_todo.interface";

export interface IAddTodoForm extends IToDo {
    onAddNewItem: () => void;
}