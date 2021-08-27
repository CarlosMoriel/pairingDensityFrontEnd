import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";

function App() {
	return (
		<div className="App">
			<Router>
				<Link to="/">Home</Link>
				<Link to="/dashboard">Dashboard</Link>

				<Routes />
			</Router>
		</div>
	);
}

export default App;
