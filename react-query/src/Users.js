import React, { useEffect, useState } from 'react';

const Users = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('http://localhost:8080/users');
				const dataRes = await response.json();
				setData(dataRes);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	if (loading) {
		return <h1>Loading....</h1>;
	}
	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	return (
		<ul>
			{data?.map((user) => (
				<li key={user.id}>{user.username}</li>
			))}
		</ul>
	);
};

export default Users;
