import {IToDo, ITodoListItem} from "../interfaces";

export class TodoList {

    private static __uniqueId = 0;
    private _theList!: ITodoListItem[];

    constructor(initialValue?: IToDo[]) {
        this._theList = initialValue?.map(item => {
            return {...item, id: ++TodoList.__uniqueId};
        }) || [];
    }

    get theList(): ITodoListItem[] {
        return this._theList;
    }

    addItem(item: IToDo): void {
        this._theList.push({...item, id: ++TodoList.__uniqueId});
    }

    removeItem(id: number): void {
        this._theList = this.theList.filter(item => item.id !== id);
    }

}