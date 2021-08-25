import { makeObservable, observable, action } from 'mobx'
import RootStore from '.'

class ToDoStore {
	private rootStore: RootStore
	public items: string[] = []

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore

		makeObservable(this, {
			items: observable,
			addItem: action,
			removeItemByIndex: action
		})
	}

	addItem = (newItem: string): void => {
		this.items = this.items.concat([newItem])
	}

	removeItemByIndex = (index: number): void => {
		this.items.splice(index, 1)
	}
}

export default ToDoStore
