import React, { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Component7 = () => {
	const dataContext = useContext(DataContext);
	console.log('Giá trị dataContext trong component7 là: ', dataContext);

	return <div>Component7</div>;
};

export default Component7;
