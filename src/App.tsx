import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './style/theme'
import { GlobalStyles } from './style/global'
import { useStores } from './stores'
import Home from './components/views/Home'
import ToDo from './components/views/ToDo'
import Settings from './components/views/Settings'
import { observer } from 'mobx-react-lite'
import logoSrc from 'assets/images/jazzhr-logo.svg'

import { JZNavbar, JZNavbarLinks, JZNavbarSection, JZNavbarBrand } from 'components/Jazz/layout'


const App = observer(() => {
	const { settingsStore } = useStores()

	return (
		<ThemeProvider theme={settingsStore.useDarkMode ? darkTheme : lightTheme}>
			<>
				<GlobalStyles />
				<Router>
					<JZNavbar>
						<JZNavbarSection>
							<JZNavbarBrand src={logoSrc} />
							<JZNavbarLinks>
								<NavLink to="/">Home</NavLink>
								<NavLink to="/todo">To Do</NavLink>
								<NavLink to="/settings">Settings</NavLink>
							</JZNavbarLinks>
						</JZNavbarSection>
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
