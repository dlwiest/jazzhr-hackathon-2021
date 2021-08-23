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

    const onClickItem = (index: number) => {
        toDoStore.removeItemByIndex(index)
    }

    return { newItemValue, onChangeNewItem, onAddItem, items: toDoStore.items, onClickItem }
}

export default ToDoController