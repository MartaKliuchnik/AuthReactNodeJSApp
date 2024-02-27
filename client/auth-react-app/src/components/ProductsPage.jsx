import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../requests/products_request';

export default function ProductsPage() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return (
		<div>
			{products.message ? (
				<p>You are not logged in. Please, visit auth page!</p>
			) : (
				products.map((item) => <ProductCard key={item.id} {...item} />)
			)}
		</div>
	);
}
