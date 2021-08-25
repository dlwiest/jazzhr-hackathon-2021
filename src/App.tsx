import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './style/theme'
import { GlobalStyles } from './style/global'
import { Navbar } from 'react-bulma-components'
import { useStores } from './stores'
import Home from './components/views/Home'
import ToDo from './components/views/ToDo'
import Settings from './components/views/Settings'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
	const { settingsStore } = useStores()

	const [isMenuActive, setIsMenuActive] = useState(false)
	const onToggleMenuActive = () => setIsMenuActive(!isMenuActive)

	return (
		<ThemeProvider theme={settingsStore.useDarkMode ? darkTheme : lightTheme }>
			<>
			<GlobalStyles />
			<Router>
				<div>
					<Navbar color="primary" active={isMenuActive}>
						<Navbar.Burger onClick={onToggleMenuActive} />
						<Navbar.Menu>
							<Navbar.Container>
								<Navbar.Link arrowless renderAs={NavLink} to="/">Home</Navbar.Link>
								<Navbar.Link arrowless renderAs={NavLink} to="/todo">To Do</Navbar.Link>
								<Navbar.Link arrowless renderAs={NavLink} to="/settings">Settings</Navbar.Link>
							</Navbar.Container>
						</Navbar.Menu>
					</Navbar>

					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/todo" component={ToDo} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</div>
			</Router>
			</>
		</ThemeProvider>
	);
})

export default App
