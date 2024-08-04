import React, { useRef, useState } from 'react';
import Component1 from './Component1';

const App = () => {
	const inputRef1 = useRef(null);
	const inputRef2 = useRef(null);

	const handleFocus = () => {
		inputRef1.current.focus();
	};

	const handleFocus2 = () => {
		inputRef2.current.focus();
	};

	const valueRef = useRef(10);
	const [valueState, setValueState] = useState(20);
	let valueNormal = 30;

	console.log('------------------------------------------');
	console.log('Giá trị của useRef: ', valueRef.current);
	console.log('Giá trị của useState: ', valueState);
	console.log('Giá trị của biến bình thường: ', valueNormal);
	console.log('------------------------------------------');

	//* Đối với biến bình thường
	// => Khi thay đổi giá trị => không gây ra re-render (render lại)
	// => Khi componenent render lại => biến đó sẽ bị reset lại (khởi tạo lại)

	//* Đối với giá trị được khởi tạo từ state
	// => Khi thay đổi giá trị => render lại component
	// => Khi component render lại => biến đó vẫn giữ nguyên giá trị (không bị khởi tạo lại)

	//* Đối với giá trị được khởi tạo từ useRef
	// => Khi đổi giá trị => không gây ra re-render 
	// => Khi component render lại => biến đó vẫn giữ nguyên giá trị (không bị khởi tạo lại)

	const handleChangeValueRef = () => {
		valueRef.current = valueRef.current + 1;
	};

	const handleChangeValueState = () => {
		setValueState(valueState + 1);
	};

	const handleChangeValueNormal = () => {
		valueNormal = valueNormal + 1;
	};

	return (
		<>
			<div>
				<button onClick={handleChangeValueRef}>Thay đổi valueRef</button>
				<button onClick={handleChangeValueState}>Thay đổi valueState</button>
				<button onClick={handleChangeValueNormal}>Thay đổi valueNormal</button>
			</div>
			<hr />
			<div>
				<div>
					<input ref={inputRef1} type='text' />
					<button onClick={handleFocus}>Focus vào input 1</button>
				</div>
				<div>
					<input ref={inputRef2} type='text' />
					<button onClick={handleFocus2}>Focus vào input 2</button>
				</div>
			</div>

			<h1>Tree component</h1>
			<Component1 />
		</>
	);
};

export default App;
