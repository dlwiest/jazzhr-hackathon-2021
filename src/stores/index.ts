import React from 'react'
import ToDoStore from './toDo.store'

class RootStore {
    public toDoStore: ToDoStore

    constructor() {
        // Pass stores a reference to RootStore on initialization.
        // This allows stores to access each other's properties as needed.
        this.toDoStore = new ToDoStore(this)
    }
}

export default RootStore

const StoresContext = React.createContext(new RootStore())
export const useStores = () => React.useContext(StoresContext)