import { useStores } from 'stores'

interface ReturnProps {
	toDoItems: string[]
}

const ToDoController = (): ReturnProps => {
	const { toDoStore } = useStores()
	return { toDoItems: toDoStore.items }
}

export default ToDoController