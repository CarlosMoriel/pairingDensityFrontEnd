export const getUserFetch = (id) => {
	return fetch(`http://localhost:8080/pairing?id=${id}`);
};
