import React from 'react';

import deleteIcon from '../assets/delete.svg'
// styles
import './recipielist.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/config';

export default function RecipieList({ data }) {
	const {mode} = useTheme()
	const handleDelete = (id)=>{
		projectFirestore.collection('recipe').doc(id).delete()
	}
	return (
		<div className="recipielist">
			{data.map(({ id, title, ingridents, method, cookingTime }) => (
				<div key={id} className={`card ${mode}`}>
					<h3>{title}</h3>
					<p>{cookingTime} to make.</p>
					<div>{method.slice(0, 100)}...</div>
					<Link to={`/recipie/${id}`}>Cook This</Link>
					<img src={deleteIcon} className='delete'  onClick={()=>{handleDelete(id)}}/>
				</div>
			))}
		</div>
	);
}
