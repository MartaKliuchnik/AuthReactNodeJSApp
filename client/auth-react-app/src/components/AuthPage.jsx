import React from 'react';
import { login_request } from '../requests/login_request.js';
import { register_request } from '../requests/register_request.js';

export default function AuthPage() {
	const loginSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		login_request({
			email: email.value,
			password: password.value,
		});
		email.value = '';
		password.value = '';
	};

	const registerSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		register_request({
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
