import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Form = styled.form`
	min-width: 500px;
	height: 40px;
	background-color: #33336d;
	border: none;
	border-radius: 10px;
	margin-bottom: 20px;
	padding: 10px;

	display: flex;
	justify-content: space-between;

	label {
		font-size: 24px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 5px;
	}

	input[type='text'] {
		width: 75%;
		height: 100%;
		color: #fff;
		background: transparent;
		outline: none;
		border: none;
		border-bottom: 1px solid transparent;
		padding: 0 10px;
		margin-right: 10px;
		transition: 0.5s;

		&:active,
		&:hover {
			background: transparent;
			border-bottom: 1px solid #fff;
		}
	}
	input[type='submit'] {
		width: 100px;
		height: 100%;
		background: #0065f2;
		color: #fff;
		outline: none;
		border: none;
		border-radius: 10px;
		padding: 5px;
		cursor: pointer;
		transition: 0.5s;

		&:hover {
			background: #fff;
			color: #33336d;
		}
	}
`;

const Search = ({ onSearch }) => {
	const [username, setUsername] = useState('');

	const onChange = (e) => {
		setUsername(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		onSearch(username);
		setUsername('');
	};

	return (
		<Form onSubmit={onSubmit}>
			<label htmlFor='search'>
				<IoSearch />
			</label>
			<input
				type='text'
				id='search'
				value={username}
				placeholder='Search GitHub Username...'
				onChange={onChange}
			/>
			<input type='submit' value='Search' />
		</Form>
	);
};

export default Search;
