import {IToDo, ITodoListItem} from "../interfaces";

export class List {

    private static __uniqueId = 0;
    private _theList!: ITodoListItem[];

    constructor(initialValue?: IToDo[]) {
        this._theList = initialValue?.map(item => {
            return {...item, id: ++List.__uniqueId};
        }) || [];
    }

    get theList(): ITodoListItem[] {
        return this._theList;
    }

    addItem(item: IToDo): void {
        this._theList.push({...item, id: ++List.__uniqueId});
    }

    removeItem(id: number): void {
        this._theList = this.theList.filter(item => item.id !== id);
    }

    updateItem(item: ITodoListItem): void {
        this._theList[this._theList.findIndex(e => e.id === item.id)] = item;
    }

}