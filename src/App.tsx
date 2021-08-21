import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/views/Home'
import ToDo from './components/views/ToDo'

const App = () => {
	return (
		<div>
			<div>
				<ul>
				<li><NavLink activeClassName="active" to="/">Home</NavLink></li>
				<li><NavLink activeClassName="active" to="/todo">To Do</NavLink></li>
				</ul>
			</div>

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/todo" component={ToDo} />
			</Switch>
		</div>
	);
}

export default App