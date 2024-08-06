import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListExams from './pages/ListExams';
import Contact from './pages/Contact';
import DetailExam from './pages/DetailExam';
import Transcript from './pages/Transcript';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import Admin from './pages/Admin';
import CreateExam from './pages/Admin/ManageExams/CreateExam';
import ManageUsers from './pages/Admin/ManageUsers';
import ManageExams from './pages/Admin/ManageExams';
import ManageFeedback from './pages/Admin/ManageFeedback';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/list-exams' element={<ListExams />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/detail/:idExam' element={<DetailExam />} />
				<Route path='/transcript' element={<Transcript />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/change-password' element={<ChangePassword />} />
				<Route path='/admin' element={<Admin />}>
					<Route path='exams' element={<ManageExams />} />
					<Route path='exams/create' element={<CreateExam />} />
					<Route path='exams/update/:idExam' element={<CreateExam />} />
					<Route path='users' element={<ManageUsers />} />
					<Route path='feedback' element={<ManageFeedback />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
