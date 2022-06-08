import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import Create from './pages/Create';
import Recipie from './pages/Recipie';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Themechanger from './components/Themechanger';
import { useTheme } from './hooks/useTheme';

function App() {
	const { mode } = useTheme();
	console.log(mode)
	return (
		<div className={`App ${mode}`}>
			<Router>
				<Navbar />
				<Themechanger />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipie/:id" element={<Recipie />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
