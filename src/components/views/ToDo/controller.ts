import React, { useState } from 'react'
import { useStores } from '../../../stores/'

const ToDoController = () => {
    const { toDoStore } = useStores()
    const [newItemValue, setNewItemValue] = useState<string>('')

    const onChangeNewItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemValue(e.target.value)
    }

    const onAddItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        toDoStore.addItem(newItemValue)
        setNewItemValue('')
    }

    const onRemoveItem= (index: number) => {
        toDoStore.removeItemByIndex(index)
    }

    return { newItemValue, onChangeNewItem, onAddItem, items: toDoStore.items, onRemoveItem}
}

export default ToDoController