import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import AuthPage from './AuthPage';
import ProductsPage from './ProductsPage';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/auth' element={<AuthPage />} />
				<Route path='/products' element={<ProductsPage />} />
			</Routes>
		</>
	);
}

export default App;
