import { Avatar, Button, List } from 'antd';
import React from 'react';

const ManageFeedback = () => {
	const dataSource = [
		{
			name: 'test1',
			email: 'test@example.com',
			title: 'Test Title',
		},
		{
			name: 'test2',
			email: 'test@example.com',
			title: 'Test Title',
		},
	];

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '12px',
				}}
			>
				<h1>Danh sách người dùng </h1>
			</div>
			<div>
				<List
					dataSource={dataSource}
					renderItem={(item) => (
						<List.Item key={item.name}>
							<List.Item.Meta
								avatar={
									<Avatar style={{ width: '40px', height: '40px' }}>
										{item.name}
									</Avatar>
								}
								title={item.title}
								description={item.email}
							/>
							<Button type='link'>Phản hồi</Button>
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

export default ManageFeedback;
