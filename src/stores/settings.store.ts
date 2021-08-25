import { makeObservable, observable, action } from 'mobx'
import RootStore from '.'

class SettingsStore {
	private rootStore: RootStore
	public useDarkMode = false

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore

		makeObservable(this, {
			useDarkMode: observable,
			toggleUseDarkMode: action,
		})
	}

    toggleUseDarkMode = (): void => { this.useDarkMode = !this.useDarkMode }
}

export default SettingsStore
