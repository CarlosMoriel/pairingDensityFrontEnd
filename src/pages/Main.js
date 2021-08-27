import React, { useEffect } from "react";
import { getUserFetch } from "../services/example";

const Main = () => {
	const getUser = async () => {
		const response = await (await getUserFetch(2)).json();
		console.log(response);
	};

	useEffect(() => {
		getUser();
	}, []);

	return <div>Main Screen</div>;
};

export default Main;
