import React from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
import DataContext from './contexts/DataContext';

const Component1 = () => {
	const data = [1, 2, 3, 4, 5];

	const valueContext = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm'];

	return (
		<>
			<DataContext.Provider value={valueContext}>
				<h1>Component1</h1>
				<Component2 data={data} />
				<Component3 />
			</DataContext.Provider>
		</>
	);
};

export default Component1;
