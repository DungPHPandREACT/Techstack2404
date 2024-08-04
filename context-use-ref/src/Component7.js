import React, { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Component7 = () => {
	const { data, darkMode, setDarkMode } = useContext(DataContext);
	console.log('Giá trị dataContext trong component7 là: ', data);

	return (
		<div>
			<div>Component7</div>
			<button onClick={() => setDarkMode(!darkMode)}>Set darkMode</button>
		</div>
	);
};

export default Component7;
