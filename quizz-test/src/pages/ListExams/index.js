import {
	ClockCircleOutlined,
	QuestionCircleOutlined,
	SearchOutlined,
	StarOutlined,
	StockOutlined,
} from '@ant-design/icons';
import {
	Avatar,
	Button,
	Card,
	Divider,
	Input,
	List,
	Select,
	Skeleton,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ListExams = () => {
	const navigate = useNavigate();
	const [searchParms, setSearchParms] = useSearchParams();
	const subjectFilter = searchParms.get('subject');

	const titleSubject = {
		html: 'HTML',
		css: 'CSS',
		javascript: 'JavaScript',
		reactjs: 'ReactJS',
		nodejs: 'NodeJS',
	};

	const titleLevel = {
		basic: 'Cơ bản',
		medium: 'Trung bình',
		advanced: 'Nâng cao',
	};

	const [listExam, setListExam] = useState([]);

	const getListExam = async (subject) => {
		// Có thể sử dụng thử viện axios
		const response = await fetch(
			`http://localhost:8080/exams?subject=${subject}`
		);
		const exams = await response.json();

		setListExam(exams);
	};

	const convertTitleToSlug = (title) => {
		//Đổi chữ hoa thành chữ thường
		let slug = title.toLowerCase();

		//Đổi ký tự có dấu thành không dấu
		slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
		slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
		slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
		slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
		slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
		slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
		slug = slug.replace(/đ/gi, 'd');
		//Xóa các ký tự đặt biệt
		slug = slug.replace(
			/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
			''
		);
		//Đổi khoảng trắng thành ký tự gạch ngang
		slug = slug.replace(/ /gi, '-');
		//Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
		//Phòng trường hợp người nhập vào quá nhiều ký tự trắng
		slug = slug.replace(/\-\-\-\-\-/gi, '-');
		slug = slug.replace(/\-\-\-\-/gi, '-');
		slug = slug.replace(/\-\-\-/gi, '-');
		slug = slug.replace(/\-\-/gi, '-');
		//Xóa các ký tự gạch ngang ở đầu và cuối
		slug = '@' + slug + '@';
		slug = slug.replace(/\@\-|\-\@|\@/gi, '');
		return slug;
	};

	const handleRedirect = (exam) => {
		let slug = convertTitleToSlug(exam.title);
		slug = `${slug}-${exam.id}.html`;

		navigate(`/detail/${slug}`);
	};

	useEffect(() => {
		getListExam(subjectFilter);
	}, [subjectFilter]);

	return (
		<>
			<div
				style={{
					marginTop: '32px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<h1>Đề thi {titleSubject[subjectFilter]}</h1>

				<Input
					prefix={<SearchOutlined />}
					style={{ height: '35px', width: '230px' }}
				/>
			</div>
			<Card style={{ marginTop: '32px' }}>
				<div style={{ position: 'relative' }}>
					<Divider orientation='left' style={{ margin: '0px' }}>
						{titleSubject[subjectFilter]}
					</Divider>
					<Select
						defaultValue='basic'
						style={{
							width: 150,
							position: 'absolute',
							right: '8px',
							top: '-4px',
						}}
						options={[
							{
								value: 'basic',
								label: 'Cơ bản',
							},
							{
								value: 'Medium',
								label: 'Trung bình',
							},
							{
								value: 'advanced',
								label: 'Nâng cao',
							},
						]}
					/>
				</div>
				<List
					className='demo-loadmore-list'
					itemLayout='horizontal'
					dataSource={listExam}
					renderItem={(exam) => (
						<List.Item
							actions={[
								<Button onClick={() => handleRedirect(exam)}>Thi thử</Button>,
							]}
						>
							<List.Item.Meta
								avatar={
									<Avatar style={{ height: '50px', width: '50px' }}>JS</Avatar>
								}
								title={exam.title}
								description={
									<div style={{ display: 'flex', alignItems: 'center' }}>
										<div>
											<QuestionCircleOutlined />
											<span style={{ marginLeft: '4px' }}>
												{exam?.questions?.length} câu
											</span>
										</div>
										<div style={{ marginLeft: '12px' }}>
											<ClockCircleOutlined />
											<span style={{ marginLeft: '4px' }}>
												{exam?.time} phút
											</span>
										</div>
										<div style={{ marginLeft: '12px' }}>
											<StarOutlined />
											<span style={{ marginLeft: '4px' }}>
												Điểm cao nhất: {exam?.highest_point ?? 'Chưa có'}
											</span>
										</div>
										<div style={{ marginLeft: '12px' }}>
											<StockOutlined />
											<span style={{ marginLeft: '4px' }}>
												Mức độ: {titleLevel[exam?.level] ?? 'Chưa xác định'}
											</span>
										</div>
									</div>
								}
							/>
						</List.Item>
					)}
				/>
			</Card>
		</>
	);
};

export default ListExams;
