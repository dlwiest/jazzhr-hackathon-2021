import { observer } from 'mobx-react-lite'
import { Content, Section, Container, Heading, Form, Button } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useController from './controller'

const ToDo = observer(() => {
	const { newItemValue, onChangeNewItem, onAddItem, items, onRemoveItem } = useController()
	return (
		<Content>
			<Section>
				<Container>
					<Heading>To Do</Heading>
					<p>Use the field below to add items to the to do list.</p>

					<form onSubmit={onAddItem}>
						<Form.Field>
							<Form.Label htmlFor="new_item">New Item</Form.Label>
							<Form.Input id="new_item" value={newItemValue} onChange={onChangeNewItem} />
						</Form.Field>
					</form>

					<ul>
						{items.map((i: string, index: number) =>
							<li key={index}>
								<span>{i}</span>
								<Button onClick={() => { onRemoveItem(index) }} text size="small" textColor="danger">
									<FontAwesomeIcon icon={faTrash} />
								</Button>
							</li>
						)}
					</ul>
				</Container>
			</Section>
		</Content>
	)
})

export default ToDo