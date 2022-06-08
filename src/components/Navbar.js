import './navbar.css';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
	const { color } = useTheme()
	return (
		<div className="navbar" style={{background: color}}>
			<nav>
				<Link to="/" className="brand">
					<h1 className="bordered">Home</h1>
				</Link>
				<Link to="/create">Create Recipie</Link>
			</nav>
		</div>
	);
};

export default Navbar;
