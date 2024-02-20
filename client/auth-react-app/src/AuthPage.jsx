import React from 'react';

export default function AuthPage() {
	const loginSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		console.log({
			email: email.value,
			password: password.value,
		});
		email.value = '';
		password.value = '';
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		console.log({
			email: email.value,
			password: password.value,
		});
		email.value = '';
		password.value = '';
	};

	return (
		<div>
			<form onSubmit={loginSubmit}>
				<p>Login</p>
				<input type='text' placeholder='Email' name='email' />
				<input type='password' placeholder='Password' name='password' />
				<button>Login</button>
			</form>

			<form onSubmit={registerSubmit}>
				<p>Register</p>
				<input type='text' placeholder='Email' name='email' />
				<input type='password' placeholder='Password' name='password' />
				<button>Register</button>
			</form>
		</div>
	);
}
