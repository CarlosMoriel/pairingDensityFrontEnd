import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/dashboard" exact component={Dashboard} />
		</Switch>
	);
};

export default Routes;
