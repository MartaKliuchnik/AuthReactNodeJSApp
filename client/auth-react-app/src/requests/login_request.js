export const login_request = (user) => {
	fetch('http://localhost:4334/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
		credentials: 'include', // enable sending cookies for browser
	})
		.then((res) => res.json())
		.then((json) => console.log(json));
};
