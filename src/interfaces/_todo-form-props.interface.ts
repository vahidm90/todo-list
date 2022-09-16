import {ITodoListItem} from "./_todo-list-item.interface";
import {IToDo} from "./_todo.interface";

export interface ITodoFormProps extends Partial<ITodoListItem> {
    onAddNewItem: (item: IToDo) => void;
    onEditItem: (item: ITodoListItem) => void;
}