import React, { useEffect, useState } from 'react';

const Count = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('update count');
			setCount(count + 1);
		}, 1000);

		return () => {
            console.log('return')
			clearInterval(timer);
		};
	}, [count]);

	return (
		<>
			<h1>Bộ đếm count1</h1>
			<h1 id='heading'>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Thay đổi count</button>
		</>
	);
};

export default Count;
