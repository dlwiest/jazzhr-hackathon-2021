import { Content, Section, Container, Form } from 'react-bulma-components'
import useController from './controller'

const Settings = (): JSX.Element => {
	const { useDarkMode, onToggleDarkMode } = useController()
	return (
		<Content>
			<Section>
				<Container>
					<h1>Settings</h1>
					<p>Customize your application experience.</p>

					<Form.Field>
						<Form.Control>
							<Form.Checkbox checked={useDarkMode} onChange={onToggleDarkMode}>Dark Mode</Form.Checkbox>
						</Form.Control>
					</Form.Field>
				</Container>
			</Section>
		</Content>
	)
}

export default Settings