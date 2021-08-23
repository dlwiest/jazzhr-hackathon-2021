import { observer } from 'mobx-react-lite'
import useController from './controller'

const ToDo = observer(() => {
    const { newItemValue, onChangeNewItem, onAddItem, items, onClickItem } = useController()
    return (
        <div>
            <h1>To Do</h1>
            <p>Use the field below to add items to the to do list. Click items to remove them.</p>

            <form onSubmit={onAddItem}>
                <label htmlFor="new_item">New Item</label>
                <input id="new_item" value={newItemValue} onChange={onChangeNewItem} />
            </form>

            <ul>
                {items.map((i: string, index: number) => <li key={index} onClick={() => { onClickItem(index) }}>{i}</li>)}
            </ul>
        </div>
    )
})

export default ToDo