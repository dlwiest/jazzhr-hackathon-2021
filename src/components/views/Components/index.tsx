import { Content, Section, Container } from 'react-bulma-components'
import { JZButton } from 'components/Jazz/form'

const Home = (): JSX.Element => {

	return (
		<Content>
			<Section>
				<Container>
					<h1>Components</h1>
					<p>Custom components for common elements (no need to remember CSS classes).</p>

					<h2>Buttons</h2>

					<div>
						<JZButton size='small'>Small</JZButton>
						<JZButton>Medium</JZButton>
						<JZButton size='large'>Large</JZButton>
						<JZButton size='giant'>Giant</JZButton>
					</div>

					<div>
						<JZButton>Primary</JZButton>
						<JZButton status='info'>Info</JZButton>
						<JZButton status='success'>Success</JZButton>
						<JZButton status='warning'>Warning</JZButton>
						<JZButton status='danger'>Danger</JZButton>
					</div>
				</Container>
			</Section>
		</Content>
	)
}

export default Home