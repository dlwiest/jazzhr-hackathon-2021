import React from 'react'
import ToDoStore from './toDo.store'
import SettingsStore from './settings.store'

class RootStore {
	public toDoStore
	public settingsStore

	constructor() {
		// Pass stores a reference to RootStore on initialization.
		// This allows stores to access each other's properties as needed.
		this.toDoStore = new ToDoStore(this)
		this.settingsStore = new SettingsStore(this)
	}
}

export default RootStore

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext)