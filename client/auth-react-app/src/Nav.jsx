import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div>
			<Link to='/products'>Products</Link>
			<Link to='/auth'>Auth</Link>
		</div>
	);
}
