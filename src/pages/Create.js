import './create.css';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Create = () => {
	const navigate = useNavigate();
	const [ title, settitle ] = useState('');
	const [ method, setmethod ] = useState('');
	const [ cookingTime, setcookingTime ] = useState('');
	const [ newingredient, setNewIngredient ] = useState('');
	const [ ingredient, setIngredient ] = useState([]);
	const ingredientInput = useRef(null);
	const { color } = useTheme();
	const handleSubmit = async (e) => {
		const doc = { title, ingredients: ingredient, method, cookingTime: cookingTime + ' minutes' };
		try {
			await projectFirestore.collection('recipe').add(doc);
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="create">
			<h2 className="page-title">Add a new Recipe</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<label>
					<span>Recipe Title:</span>
					<input
						type="text"
						onChange={(e) => {
							settitle(e.target.value);
						}}
						value={title}
						required
					/>
				</label>

				{/* ingridient go here */}
				<label>
					<span>Recipe Ingredients:</span>
					<div className="ingredients">
						<input
							type="text"
							value={newingredient}
							onChange={(e) => {
								setNewIngredient(e.target.value);
							}}
							ref={ingredientInput}
						/>
						<button
							className="btn"
							style={{ backgroundColor: color }}
							onClick={(e) => {
								e.preventDefault();
								const ing = newingredient.trim();
								if (ing && !ingredient.includes(ing)) {
									setIngredient((prevIngredient) => [ ...prevIngredient, ing ]);
								}
								setNewIngredient('');
								ingredientInput.current.focus();
							}}
						>
							add
						</button>
					</div>
				</label>
				<p>Current ingredient: {ingredient.map((ing) => <em key={ing}>{ing}, </em>)} </p>

				<label>
					<span>Recipe method:</span>
					<textarea
						onChange={(e) => {
							setmethod(e.target.value);
						}}
						value={method}
						required
					/>
				</label>

				<label>
					<span>Cooking Time (minutes):</span>
					<input
						type="number"
						onChange={(e) => {
							setcookingTime(e.target.value);
						}}
						value={cookingTime}
						required
					/>
				</label>
				<button className="btn" style={{ backgroundColor: color }}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Create;
