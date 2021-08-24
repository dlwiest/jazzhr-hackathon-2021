import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Navbar } from 'react-bulma-components'
import Home from './components/views/Home'
import ToDo from './components/views/ToDo'

const App = () => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const onToggleMenuActive = () => { setIsMenuActive(!isMenuActive) }

	return (
		<Router>
			<div>
				<Navbar color="primary" active={isMenuActive}>
					<Navbar.Burger onClick={onToggleMenuActive} />
					<Navbar.Menu>
						<Navbar.Container>
							<Navbar.Link arrowless renderAs={NavLink} to="/">Home</Navbar.Link>
							<Navbar.Link arrowless renderAs={NavLink} to="/todo">To Do</Navbar.Link>
						</Navbar.Container>
					</Navbar.Menu>
				</Navbar>

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/todo" component={ToDo} />
				</Switch>
			</div>
		</Router>
	);
}

export default App
