import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions/actionsCounter';

const Counter = () => {
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment(5));
	};

	const handleDecrement = () => {
		dispatch(decrement(2));
	};

	return (
		<div>
			<button onClick={handleIncrement}>Tăng</button>
			<h1>Count: {count}</h1>
			<button onClick={handleDecrement}>Giảm</button>
		</div>
	);
};

export default Counter;
