export const getProducts = (callback) => {
	fetch('http://localhost:4334/products', {
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((json) => callback(json));
};
