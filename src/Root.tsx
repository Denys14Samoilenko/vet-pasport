import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';

const Root = () => {
	return ( 
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	 );
}
 
export default Root;