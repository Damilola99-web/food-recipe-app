import './search.css';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/4.1 useFetch';
import RecipieList from '../components/RecipieList';
const Search = () => {
	const [ queryString ] = useSearchParams();
	// const queryParams = new URLSearchParams(queryString);
	const query = queryString.get('q');
	const url = 'http://localhost:3500/recipes?q=' + query;
	const { data, isPending, error } = useFetch(url);
	if (data && data.length === 0) {
		return <div className="error">No recipies match your search...</div>;
	}
	return (
		<div>
			<h2 className="page-title">Recipies including "{query}"</h2>
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{data && <RecipieList data={data} />}
		</div>
	);
};

export default Search;
