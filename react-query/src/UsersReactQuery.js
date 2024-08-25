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

const updateUser = async (variable = {}) => {
	const { userUpdate, id } = variable;

	console.log('userUpdate: ', userUpdate);
	console.log('id: ', id);
	return axios.put(`http://localhost:8080/users/${id}`, userUpdate);
};

const deleteUser = async (id) => {
	return axios.delete(`http://localhost:8080/users/${id}`);
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
	const mutationAdd = useMutation({
		mutationFn: addUser,
		onSuccess: () => {
			console.log('Xử lý thành công thêm mới');
			queryClient.invalidateQueries(['users']);
		},
	});
	const mutationUpdate = useMutation({
		mutationFn: updateUser,
		onSuccess: () => {
			console.log('Xử lý thành công chỉnh sửa');
			queryClient.invalidateQueries(['users']);
		},
	});
	const mutationDelete = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			console.log('Xử lý thành công xóa');
			queryClient.invalidateQueries(['users']);
		},
	});

	const handleAddUser = () => {
		const newUser = {
			email: 'test-react-query-4@gmail.com',
			password: '12345678',
			username: 'test-react-query-4',
			role: 'user',
		};

		mutationAdd.mutate(newUser);
	};

	const handleUpdateUser = () => {
		const userUpdate = {
			email: 'user2-updated@gmail.com',
			password: '12345678',
			username: 'user2 updated',
			role: 'user',
		};

		mutationUpdate.mutate({ userUpdate, id: '8302' });
	};

	const handleDeleteUser = () => {
		mutationDelete.mutate('2');
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
				<button onClick={handleUpdateUser}>Cập nhật người dùng</button>
				<button onClick={handleDeleteUser}>Xóa người dùng</button>
			</div>
		</div>
	);
};

export default UsersReactQuery;
