import React from 'react';
import PropTypes from 'prop-types';

const Persona = ({ name, age, email, isMarried, children }) => {
	return (
		<div>
			<h1>Persona</h1>
			<p>{name}</p>
			<p>{age}</p>
			<p>{email}</p>
			<p>{isMarried.toString()}</p>
			<h2>Children</h2>
			<ul>
				{children.map((child, idx) => {
					return <li key={idx}>{child}</li>;
				})}
			</ul>
		</div>
	);
};

Persona.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	city: PropTypes.string,
	isMarried: PropTypes.bool,
	children: PropTypes.arrayOf(PropTypes.string),
};

export default Persona;
