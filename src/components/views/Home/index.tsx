import { Content, Section, Container, Heading } from 'react-bulma-components'
import useController from './controller'

const Home = () => {
    const { toDoItems } = useController()

    return (
        <Content>
            <Section>
                <Container>
                    <Heading>Home</Heading>
                    <p>This is the Home view. We might provide a description of who we are, what the app does, or an overview of features or data here.
                        If we'd rather the user get straight into the app, redirect the user to the appropriate view for the "/" route in the routes file.
                    </p>

                    <p>Current to do list items: <strong>{toDoItems.length}</strong></p>
                </Container>
            </Section>
        </Content>
    )
}

export default Home