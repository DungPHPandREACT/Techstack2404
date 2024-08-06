import React from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const DefaultLayout = () => {
	return (
		<div>
			<Navigation />
			<Sidebar />
			Content
		</div>
	);
};

export default DefaultLayout;
