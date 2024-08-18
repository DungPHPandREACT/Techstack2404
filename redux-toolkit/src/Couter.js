import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	decrementByAmount,
	increment,
	incrementByAmount,
} from './slices/counterSlice';

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleIncrementByAmount = () => {
		dispatch(incrementByAmount(5));
	};

	const handleDecrementByAmount = () => {
		dispatch(decrementByAmount(5));
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>Tăng</button>
			<button onClick={handleDecrement}>Giảm</button>
			<button onClick={handleIncrementByAmount}>Tăng 5 đơn vị</button>
			<button onClick={handleDecrementByAmount}>Giảm 2 đơn vị</button>
		</div>
	);
};

export default Counter;
