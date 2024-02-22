import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AuthPage from './components/AuthPage';
import ProductsPage from './components/ProductsPage';

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
