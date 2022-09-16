import {ITodoListItem} from "./_todo-list-item.interface";

export interface ITodoListItemProps {
    item: ITodoListItem;
    onDelete: (id: number) => void;
    onEdit: (ITodoListItem) => void;
}