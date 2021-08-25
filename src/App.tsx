import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './style/theme'
import { GlobalStyles } from './style/global'
import { useStores } from './stores'
import Home from './components/views/Home'
import ToDo from './components/views/ToDo'
import Settings from './components/views/Settings'
import { observer } from 'mobx-react-lite'

import { JZNavbar, JZNavbarLinks } from 'components/Jazz/layout'


const App = observer(() => {
	const { settingsStore } = useStores()

	const [isMenuActive, setIsMenuActive] = useState(false)
	const onToggleMenuActive = () => setIsMenuActive(!isMenuActive)

	return (
		<ThemeProvider theme={settingsStore.useDarkMode ? darkTheme : lightTheme }>
			<>
			<GlobalStyles />
			<Router>
				<JZNavbar>
					<JZNavbarLinks>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/todo">To Do</NavLink>
						<NavLink to="/settings">Settings</NavLink>
					</JZNavbarLinks>
				</JZNavbar>
				<div>
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
