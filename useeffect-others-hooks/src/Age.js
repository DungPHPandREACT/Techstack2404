import React, { memo } from 'react';

const Age = (props) => {
	console.log('Age, Re-render');

	return <h1>Age: {props.age}</h1>;
};

export default memo(Age);
