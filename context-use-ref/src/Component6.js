import React, { useContext } from 'react';
import DataContext from './contexts/DataContext';

const Component6 = (props) => {
	const dataContext = useContext(DataContext);

	console.log(dataContext);

	console.log('Giá trị props nhận được là: ', props.data);
	return <div>Component6</div>;
};

export default Component6;
