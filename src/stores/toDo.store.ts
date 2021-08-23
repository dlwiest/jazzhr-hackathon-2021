import { makeObservable, observable, runInAction } from 'mobx'
import RootStore from '.'

class ToDoStore {
    private rootStore: RootStore
    public items: string[] = []

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        makeObservable(this, {
            items: observable,
        })
    }

    addItem = (newItem: string) => {
        runInAction(() => { this.items = this.items.concat([newItem]) })
    }

    removeItemByIndex = (index: number) => {
        runInAction(() => { this.items.splice(index, 1) })
    }
}

export default ToDoStore