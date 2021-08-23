import { useStores } from '../../../stores/'

const ToDoController = () => {
    const { toDoStore } = useStores()
    return { toDoItems: toDoStore.items }
}

export default ToDoController