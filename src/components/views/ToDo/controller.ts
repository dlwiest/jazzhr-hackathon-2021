import React, { useState } from 'react'
import { useStores } from '../../../stores/'

interface ReturnProps {
	newItemValue: string
	onChangeNewItem: (e: React.ChangeEvent<HTMLInputElement>) => void
	onAddItem: (e: React.FormEvent<HTMLFormElement>) => void
	items: string[]
	onRemoveItem: (index: number) => void
}

const ToDoController = (): ReturnProps => {
	const { toDoStore } = useStores()
	const [newItemValue, setNewItemValue] = useState('')

	const onChangeNewItem = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewItemValue(e.target.value)
	}

	const onAddItem = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		toDoStore.addItem(newItemValue)
		setNewItemValue('')
	}

	const onRemoveItem = (index: number) => {
		toDoStore.removeItemByIndex(index)
	}

	return { newItemValue, onChangeNewItem, onAddItem, items: toDoStore.items, onRemoveItem }
}

export default ToDoController
