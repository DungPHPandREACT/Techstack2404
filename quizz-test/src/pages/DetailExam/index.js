import React, { useEffect, useState } from 'react';
import './styles.css';
import { Button, Radio, Space, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const DetailExam = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

	const [startTimer, setStartTimer] = useState(false);
	const [isActive, setIsActive] = useState(false);
	// phút * giây
	const [time, setTime] = useState(1 * 5);

	const [detailExam, setDetailExam] = useState({});

	const answerConvert = {
		0: 'A',
		1: 'B',
		2: 'C',
		3: 'D',
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const handleStartExam = () => {
		setStartTimer(true);
	};

	const convertSlugToId = (slug) => {
		const id = slug.split('-').pop().split('.').shift();

		return id;
	};

	const fetchExam = async (id) => {
		if (!id) {
			navigate('/');
		}
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:8080/exams/${id}`);
			const exam = await response.json();

			setTime(exam.time * 60);

			setDetailExam(exam);
			setIsLoading(false);
		} catch (err) {
			navigate('/');
		}
	};

	useEffect(() => {
		const id = convertSlugToId(params.idExam);

		fetchExam(id);
	}, []);

	useEffect(() => {
		let interval = null;
		if (startTimer && !isActive) {
			setIsActive(true);
		}

		if (isActive) {
			interval = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime === 0) {
						clearInterval(interval);
						alert('Kết thúc thời gian làm bài!');
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, startTimer]);

	useEffect(() => {
		const handleBeforeUnload = (event) => {
			if (startTimer) {
				const message =
					'Bạn có chắc chắn muốn rời khỏi trang? Thời gian làm bài sẽ bị mất!';
				event.preventDefault(); // Đảm bảo trình duyệt hiển thị cảnh báo
				event.returnValue = message; // Thêm thuộc tính để hiển thị thông báo trên trình duyệt
				return message; // Một số trình duyệt yêu cầu trả về thông báo
			}
		};

		if (startTimer) {
			window.addEventListener('beforeunload', handleBeforeUnload);
		}

		if (time === 0) {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		}

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, [startTimer, time]);

	return isLoading ? (
		<Spin />
	) : (
		<div className='exam-detail-container'>
			{/* Header */}
			<header className='exam-header'>
				<div className='exam-title'>
					<h1>Tên Đề Thi</h1>
				</div>
				<div className='back-button'>
					<Button>Quay lại</Button>
				</div>
			</header>

			{/* Exam Info */}
			<section className='exam-info'>
				<h2>Thông Tin Đề Thi</h2>
				<p>
					<strong>Tên đề thi:</strong> {detailExam?.title}
				</p>
				<p>
					<strong>Thời gian làm bài:</strong> {detailExam?.time} phút
				</p>
				<p>
					<strong>Số lượng câu hỏi:</strong> {detailExam?.questions?.length} câu
				</p>
			</section>

			{/* Countdown Timer */}

			<div className='countdown-timer'>
				{startTimer ? (
					<h3>Thời gian còn lại: {formatTime(time)}</h3>
				) : (
					<Button type='primary' onClick={handleStartExam}>
						Bắt đầu làm bài
					</Button>
				)}
			</div>

			{/* Questions List */}
			<section className='questions-section'>
				{/* Question */}
				{detailExam.questions.map((question, index) => (
					<div key={`question-${index + 1}`} className='question-item'>
						<p>
							<strong>Câu {index + 1}:</strong> {question.question} ?
						</p>
						<div className='answer-options' style={{ marginTop: '10px' }}>
							<Radio.Group>
								<Space direction='vertical' style={{ width: '100%' }}>
									{question?.answers.map((answer, indexAnswer) => (
										<Radio value={answerConvert[indexAnswer]}>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
												}}
											>
												<div style={{ marginRight: '8px', width: '78px' }}>
													{answer}
												</div>
											</div>
										</Radio>
									))}
								</Space>
							</Radio.Group>
						</div>
					</div>
				))}
			</section>

			{/* Submit Button */}
			{startTimer && (
				<footer className='exam-footer'>
					<Button type='primary' className='submit-button'>
						Nộp bài
					</Button>
				</footer>
			)}
		</div>
	);
};

export default DetailExam;
