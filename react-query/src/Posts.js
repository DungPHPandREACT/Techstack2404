import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchPosts = (page = 1, limit = 10) => {
	return axios.get(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
	);
};

const Posts = () => {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isRefetchError,
	} = useInfiniteQuery({
		queryKey: ['posts'],
		queryFn: ({ pageParam }) => fetchPosts(pageParam),
		getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
			lastPage.nextCursor,
		getPreviousPageParam: (
			firstPage,
			allPages,
			firstPageParam,
			allPageParams
		) => firstPage.prevCursor,
	});

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	if (isRefetchError) {
		return <h1>Error</h1>;
	}

	console.log('data: ', data);
	console.log('hasNextPage: ', hasNextPage);

	return (
		<div>
			{data.pages.map((page, index) => (
				<ul key={index}>
					{page.data.map((post) => (
						<li>{post.title}</li>
					))}
				</ul>
			))}
			<button
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage || isFetchingNextPage}
			>
				{isFetchingNextPage
					? 'Loading more...'
					: hasNextPage
					? 'Load more'
					: 'No more data'}
			</button>
		</div>
	);
};

export default Posts;
