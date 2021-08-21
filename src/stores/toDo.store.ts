import { makeObservable, observable, runInAction } from 'mobx'
import RootStore from '.'

class ToDoStore {
    private rootStore: RootStore
    public foo: string = 'bar'

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this, {
            foo: observable,
        })
    }

    changeFoo() {
        console.log('changing foo')
        runInAction(() => {
            this.foo = 'bat'
        })
    } 
}

export default ToDoStore