import { Avatar, Button, Divider, Input, List, Modal } from 'antd';
import React, { useState } from 'react';

const ManageFeedback = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const dataSource = [
		{
			name: 'test1',
			email: 'test1@example.com',
			title: 'Test Title',
		},
		{
			name: 'test2',
			email: 'test2@example.com',
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
			<Modal
				title='Phản hồi ý kiến'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				width={650}
				okText='Gửi'
				cancelText='Đóng lại'
			>
				<Input.TextArea
					style={{
						height: '150px',
					}}
				/>
			</Modal>
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
							<Button type='link' onClick={showModal}>
								Phản hồi
							</Button>
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

export default ManageFeedback;
