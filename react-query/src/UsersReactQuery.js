import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchUsers = async () => {
	try {
		const response = await fetch('http://localhost:8080/users');
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

const addUser = async (newUser) => {
	return axios.post('http://localhost:8080/users', newUser);
};

const UsersReactQuery = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
		// staleTime: là khoảng thời gian mà dữ liệu được coi là mới sau khi lấy từ API về
		staleTime: 60000,
		// gcTime: là khoảng thời gian mà dữ liệu được lưu trong cache
		gcTime: 300000,
		refetchOnWindowFocus: false,
	});

	// ví dụ với useMutation
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: addUser,
		onSuccess: () => {
			console.log('Xử lý thành công');
			queryClient.invalidateQueries(['users']);
		},
	});

	console.log('mutation: ', mutation);

	const handleAddUser = () => {
		const newUser = {
			email: 'test-react-query-3@gmail.com',
			password: '12345678',
			username: 'test-react-query-3',
			role: 'user',
		};

		mutation.mutate(newUser);
	};

	if (isLoading) {
		return <h1>Loading....</h1>;
	}
	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	return (
		<div>
			<ul>
				{data?.map((user) => (
					<li key={user.id}>{user.username}</li>
				))}
			</ul>
			<div>
				<button onClick={handleAddUser}>Thêm mới người dùng</button>
			</div>
		</div>
	);
};

export default UsersReactQuery;
