import './recipie.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';
import { useTheme } from '../hooks/useTheme';

const Recipie = () => {
	const { id } = useParams();
	const fetch = ``;
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [isPending, setIsPending] = useState(false)
	const { mode } = useTheme()
	useEffect(()=>{
		setIsPending(true)
		const unsub = projectFirestore.collection('recipe').doc(id).onSnapshot(doc => {
			console.log(doc)
			if(doc.exists) {
				setIsPending(false)
				setData(doc.data())
			} else {
				setIsPending(false)
				setError('Could not find that recipe')
			}
			
		})

		return ()=>{
			unsub()
		}
	},[id])

	const handleClick = ()=>{
		projectFirestore.collection('recipe').doc(id).update({ title : 'Update'})
	};

	return (
		<div className={`recipe ${mode}`}>
			{isPending && <p className="loading">loading...</p>}
			{error && <p className="error">{error}</p>}
			{data && (
				<div key={data.id} className="card">
					<h2 className="page-title">{data.title}</h2>
					<p>Takes {data.cookingTime} to cook.</p>
					<ul>{data.ingredients.map((ingrident) => <li key={ingrident}>{ingrident}</li>)}</ul>
					<p className="method">{data.method}</p>
					<button onClick={handleClick}>Update data</button>
				</div>
			)}
		</div>
	);
};

export default Recipie;
