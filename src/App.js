import React, { useState, useEffect } from 'react';
import './App.css';

import Persona from './components/Persona';

const App = () => {
	const [users, setUsers] = useState([]);

	const BASE_URL = process.env.REACT_APP_BASE_URL;
	//console.log(process.env.REACT_APP_BASE_URL);

	useEffect(() => {
		fetch(`${BASE_URL}`)
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, [BASE_URL]);

	return (
		<div className='App'>
			<h1>Clase de PropTypes y Env Variables</h1>

			{users.map((user) => {
				return (
					<div key={user.id}>
						<p>
							{user.name} - {user.email}
						</p>
					</div>
				);
			})}
			<Persona
				name='Daniel Di Salvo'
				age={36}
				email='danieldi_salvo@gmail.com'
				isMarried={false}
				children={['Florencia', 'Victoria']}
			/>
		</div>
	);
};

export default App;
