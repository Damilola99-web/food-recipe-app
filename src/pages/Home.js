import './home.css';
import React, { useEffect, useState } from 'react';
import RecipieList from '../components/RecipieList';
import { projectFirestore } from '../firebase/config';

const Home = () => {
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(false);
	const [ isPending, setIsPending ] = useState(false);
	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore.collection('recipe').onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No recipes to load');
					setIsPending(false);
				}
				else {
					let result = [];

					snapshot.docs.forEach((doc) => {
						result.push({ id: doc.id, ...doc.data() });
					});
					setData(result);
					setIsPending(false);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);

		return () => {
			unsub();
		};
	}, []);
	return (
		<div className="home">
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{data && <RecipieList data={data} />}
		</div>
	);
};

export default Home;
