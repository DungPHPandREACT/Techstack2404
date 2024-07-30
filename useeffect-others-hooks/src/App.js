import { useEffect, useState } from 'react';
import Count from './Count';
import Age from './Age';
import Name from './Name';

const App = () => {
	// const [count, setCount] = useState(1);
	// const [count2, setCount2] = useState(1);
	// const [showCount, setShowCount] = useState(false);

	// const [data, setData] = useState([]);
	// const [page, setPage] = useState(1);
	// const [isLoading, setIsLoading] = useState(false);

	// console.log('Nội dung ngoài useEffect'); // out

	// useEffect sẽ được chạy khi component render xong

	// useEffect(callback) => dependencies không truyền gì
	// useEffect(callback, []) => dependencies là mảng rỗng ( [] )
	// useEffect(callback, [param1, param2, ...paramN]) => dependencies là một mảng và các phần tử trong mảng là param1, param2, paramN

	// const heading = document.getElementById('heading'); // null
	// heading.innerHTML = 'T3H';

	// useEffect(() => {
	// 	console.log('useEffect không truyền dependencies');
	// });
	// => Sẽ được chạy sau mỗi lần render

	// useEffect(() => {
	// 	console.log('useEffect có dependencies là []');
	// }, []);
	// => Sẽ được chạy sau lần render đầu tiên

	// useEffect(() => {
	// 	console.log('useEffect có dependencies là [count2]');
	// }, [count, count2]);
	// => Sẽ được chạy sau lần render đầu tiên, và chạy tiếp sau những lần render mà count2 thay đổi

	// const fetchData = async () => {
	// 	setIsLoading(true);

	// 	try {
	// 		const response = await fetch(
	// 			`https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students?page=${page}&limit=5`
	// 		);
	// 		const dataResponse = await response.json();
	// 		console.log('dataResponse: ', dataResponse);
	// 	} catch (e) {
	// 		console.log(e);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, [page]);

	const [student, setStudent] = useState({
		name: 'Student 1',
		age: 20,
	});

	const updateValue = () => {
		setStudent({
			name: 'Student 1',
			age: 20,
		});
	};

	const updateName = () => {
		setStudent({
			...student,
			name: 'Student update',
		});
	};

	const changeAge = () => {
		setStudent({
			...student,
			age: student.age + 1,
		});
	};

	return (
		<div id='container'>
			{/* <h1>Bộ đếm count1</h1>
			<h1 id='heading'>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Thay đổi count</button> */}

			{/* <h1>Bộ đếm count2</h1>
			<h1>{count2}</h1>
			<button onClick={() => setCount2(count2 + 1)}>Thay đổi count2</button> */}

			{/* {showCount && <Count />} */}

			{/* <button onClick={() => setShowCount(!showCount)}>
				Thay đổi showCount
			</button> */}

			{/* {isLoading ? (
				<h1>Loading.....</h1>
			) : (
				<button onClick={() => setPage(page + 1)}>Trang tiếp theo</button>
			)} */}

			<h1>Profile</h1>
			<button onClick={updateValue}>Change value</button>
			<button onClick={updateName}>Change name</button>
			<button onClick={changeAge}>Change age</button>
			<Name name={student.name} />
			<Age age={student.age} />
		</div>
	);
};

export default App;
