import React from 'react';

const Name = (props) => {
	console.log('Name, Re-render');

	return <h1>Name: {props.name}</h1>;
};

export default React.memo(Name);
