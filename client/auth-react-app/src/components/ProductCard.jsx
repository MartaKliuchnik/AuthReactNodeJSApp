import React from 'react';

export default function ProductCard({ title, price }) {
	return (
		<div
			style={{
				border: '1px solid black',
				width: '150px',
				textAlign: 'center',
				marginTop: '10px',
			}}
		>
			<p>{title}</p>
			<p>Price: {price}</p>
		</div>
	);
}
