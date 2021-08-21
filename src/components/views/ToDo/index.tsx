import { observer } from 'mobx-react-lite'
import { useStores } from '../../../stores/'

const ToDo = observer(() => {
    const { toDoStore } = useStores()
    const { foo } = toDoStore
    return (
        <div>
            <h1>To Do</h1>
            <p>Add or remove items from the to do list.</p>
            <p><strong onClick={() => { toDoStore.changeFoo() } }>{foo}</strong></p>
        </div>
    )
})

export default ToDo