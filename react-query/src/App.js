import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UsersReactQuery from './UsersReactQuery';
import Users from './Users';
import Posts from './Posts';
import DetailPost from './DetailPost';

const App = () => {
	return (
		<div>
			<div style={{ margin: '12px' }}>
				<NavLink to='/'>Trang chủ</NavLink>
			</div>
			<div style={{ margin: '12px' }}>
				<NavLink to='/users'>Users truyền thống</NavLink>
			</div>
			<div style={{ margin: '12px' }}>
				<NavLink to='/users-react-query'>Users react query</NavLink>
			</div>
			<div style={{ margin: '12px' }}>
				<NavLink to='/posts'>Post react query</NavLink>
			</div>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/users-react-query' element={<UsersReactQuery />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:idPost' element={<DetailPost />} />
			</Routes>
		</div>
	);
};

export default App;
