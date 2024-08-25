import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const fetchDetailPost = async (id) => {
	return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const DetailPost = () => {
	// Cách truyền thống
	// const [post, setPost] = useState({});
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);
	// const params = useParams();

	// const fetchDetailPost = async (id) => {
	// 	try {
	// 		const response = await axios.get(
	// 			`https://jsonplaceholder.typicode.com/posts/${id}`
	// 		);

	// 		setPost(response.data);
	// 	} catch (error) {
	// 		setError(error.message);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	const id = params.idPost;

	// 	fetchDetailPost(id);
	// }, [params]);

	// if (loading) {
	// 	return <h1>Loading....</h1>;
	// }

	// if (error) {
	// 	return <h1>Error: {error.message}</h1>;
	// }

	// Sử dụng react query
	const params = useParams();
	const id = Number(params.idPost);
	const {
		data: post,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['posts', id],
		queryFn: () => fetchDetailPost(id),
		staleTime: 30000,
		gcTime: 60000,
	});

	console.log('post: ', post);

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	return (
		<div>
			<h1>Hiển thị thông tin chi tiết của post</h1>
			<h1>ID: {post?.data?.id}</h1>
			<h1>Title: {post?.data?.title}</h1>
			<h1>Body: {post?.data?.body}</h1>
		</div>
	);
};

export default DetailPost;
