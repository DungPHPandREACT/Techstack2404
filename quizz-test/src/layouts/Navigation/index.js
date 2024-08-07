import { Avatar, Button, Checkbox, Dropdown, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import './navigation.css';
import { useFormik } from 'formik';

const items = [
	{
		key: '1',
		label: <Link to='/profile'>Thông tin</Link>,
	},
	{
		key: '2',
		label: <Link to='/profile'>Đổi mật khẩu</Link>,
	},
	{
		key: '3',
		label: <div>Đăng xuất</div>,
	},
	{
		type: 'divider',
	},
	{
		key: '4',
		label: <Link to='/admin'>Quản trị</Link>,
	},
];

const FormLogin = ({ onRegister, formLogin }) => {
	console.log('formLogin.errors: ', formLogin.errors);

	return (
		<Form name='basic' layout='vertical'>
			<Form.Item
				label='Email'
				rules={[
					{
						required: true,
					},
				]}
				validateStatus={formLogin.errors.email && 'error'}
				help={formLogin.errors.email && formLogin.errors.email}
			>
				<Input size='large' name='email' onChange={formLogin.handleChange} />
			</Form.Item>

			<Form.Item
				label='Mật khẩu'
				rules={[
					{
						required: true,
					},
				]}
				validateStatus={formLogin.errors.password && 'error'}
				help={formLogin.errors.password && formLogin.errors.password}
			>
				<Input.Password
					size='large'
					name='password'
					onChange={formLogin.handleChange}
				/>
			</Form.Item>

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Form.Item name='remember' valuePropName='checked'>
					<Checkbox>Ghi nhớ mật khẩu</Checkbox>
				</Form.Item>

				<Button type='link' onClick={onRegister}>
					Đăng ký
				</Button>
			</div>
		</Form>
	);
};

const FormRegister = ({ formRegister }) => {
	console.log('formRegister.errors: ', formRegister.errors);
	return (
		<Form name='basic' layout='vertical'>
			<Form.Item
				label='Email'
				rules={[
					{
						required: true,
					},
				]}
				validateStatus={formRegister.errors.email && 'error'}
				help={formRegister.errors.email && formRegister.errors.email}
			>
				<Input size='large' name='email' onChange={formRegister.handleChange} />
			</Form.Item>
			<Form.Item
				label='Tên tài khoản'
				rules={[
					{
						required: true,
					},
				]}
				validateStatus={formRegister.errors.username && 'error'}
				help={formRegister.errors.username && formRegister.errors.username}
			>
				<Input
					size='large'
					name='username'
					onChange={formRegister.handleChange}
				/>
			</Form.Item>
			<Form.Item
				label='Mật khẩu'
				rules={[
					{
						required: true,
					},
				]}
				validateStatus={formRegister.errors.email && 'error'}
				help={formRegister.errors.email && formRegister.errors.email}
			>
				<Input.Password
					size='large'
					name='password'
					onChange={formRegister.handleChange}
				/>
			</Form.Item>
		</Form>
	);
};

const Navigation = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [statusModal, setStatusModal] = useState('login');

	const formLogin = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Chưa đúng định dạng email')
				.required('Chưa nhập email'),
			password: Yup.string()
				.min(6, 'Password chưa hợp lệ')
				.max(18, 'Too Long!')
				.required('Chưa nhập mật khẩu'),
		}),
		onSubmit: (values) => {
			console.log(values);

			setIsModalOpen(false);
		},
	});

	const formRegister = useFormik({
		initialValues: {
			email: '',
			username: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.email('Chưa đúng định dạng email')
				.required('Chưa nhập email'),
			username: Yup.string()
				.min(2, 'Tên chưa hợp lệ')
				.max(24, 'Tên chưa hợp lệ')
				.required('Chưa nhập tên tài khoản'),
			password: Yup.string()
				.min(6, 'Password chưa hợp lệ')
				.max(18, 'Password chưa hợp lệ')
				.required('Chưa nhập mật khẩu'),
		}),
		onSubmit: (values) => {
			console.log(values);
			setIsModalOpen(false);
		},
	});

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		if (statusModal === 'login') {
			formLogin.handleSubmit();
		} else {
			formRegister.handleSubmit();
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleLogin = () => {
		setStatusModal('login');
		handleOpenModal();
	};

	const handleRegister = () => {
		setStatusModal('register');
		handleOpenModal();
	};

	return (
		<>
			<nav className='nav-app'>
				<div className='wrapper'>
					<div className='logo'>
						<Link to='#'>Thi Online</Link>
					</div>
					<input type='radio' name='slider' id='menu-btn' />
					<input type='radio' name='slider' id='close-btn' />
					<ul className='nav-links'>
						<label htmlFor='close-btn' className='btn close-btn'>
							<i className='fas fa-times' />
						</label>
						<li>
							<NavLink to='/'>Trang chủ</NavLink>
						</li>
						<li>
							<NavLink to='/list-exams?subject=all' className='desktop-item'>
								Môn thi
							</NavLink>
							<input type='checkbox' id='showDrop' />
							<label htmlFor='showDrop' className='mobile-item'>
								Dropdown Menu
							</label>
							<ul className='drop-menu'>
								<li>
									<NavLink to='/list-exams?subject=html'>HTML</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=css'>CSS</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=javascript'>
										Javascript
									</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=reactjs'>ReactJS</NavLink>
								</li>
								<li>
									<NavLink to='/list-exams?subject=nodejs'>NodeJS</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink to='/transcript'>Bảng điểm</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Liên hệ</NavLink>
						</li>
					</ul>
					<label htmlFor='menu-btn' className='btn menu-btn'>
						<i className='fas fa-bars' />
					</label>

					<div className='profile'>
						{/* Chưa đăng nhập */}
						<Button style={{ margin: '0px 8px' }} onClick={handleRegister}>
							Đăng ký
						</Button>
						<Button style={{ margin: '0px 8px' }} onClick={handleLogin}>
							Đăng nhập
						</Button>

						{/* Đã đăng nhập */}
						<Dropdown menu={{ items }} placement='top'>
							<Avatar size='large' style={{ width: '55px', height: '55px' }}>
								Dũng
							</Avatar>
						</Dropdown>
					</div>
				</div>
			</nav>
			<Modal
				title={statusModal === 'login' ? 'Đăng nhập' : 'Đăng ký'}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				okText={statusModal === 'login' ? 'Đăng nhập' : 'Đăng ký'}
				cancelText='Đóng lại'
				maskClosable={false}
			>
				{statusModal === 'login' ? (
					<FormLogin onRegister={handleRegister} formLogin={formLogin} />
				) : (
					<FormRegister formRegister={formRegister} />
				)}
			</Modal>
		</>
	);
};

export default Navigation;
