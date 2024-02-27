export const register_request = (user) => {
	fetch('http://localhost:4334/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((json) => console.log(json));
};
