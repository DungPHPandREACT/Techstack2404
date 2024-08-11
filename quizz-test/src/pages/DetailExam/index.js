import React, { useEffect, useState } from 'react';
import './styles.css';
import { Button, Radio, Space } from 'antd';

const DetailExam = () => {
	const [startTimer, setStartTimer] = useState(false);
	const [isActive, setIsActive] = useState(false);
	// phút * giây
	const [time, setTime] = useState(1 * 5);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const handleStartExam = () => {
		setStartTimer(true);
	};

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

	console.log('time: ', time);

	return (
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
					<strong>Tên đề thi:</strong> Thi Kết Thúc Học Phần
				</p>
				<p>
					<strong>Thời gian làm bài:</strong> 60 phút
				</p>
				<p>
					<strong>Số lượng câu hỏi:</strong> 20 câu
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
				<div className='question-item'>
					<p>
						<strong>Câu 1:</strong> Nội dung câu hỏi?
					</p>
					<div className='answer-options' style={{ marginTop: '10px' }}>
						<Radio.Group>
							<Space direction='vertical' style={{ width: '100%' }}>
								<Radio value='A'>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<div style={{ marginRight: '8px', width: '78px' }}>
											Đáp án A
										</div>
									</div>
								</Radio>
								<Radio value='A'>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
										}}
									>
										<div style={{ marginRight: '8px', width: '78px' }}>
											Đáp án A
										</div>
									</div>
								</Radio>
							</Space>
						</Radio.Group>
					</div>
				</div>
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
