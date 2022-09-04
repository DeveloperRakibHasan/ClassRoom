import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import DashBoard from './components/pages/student/DashBoard';
import Signup from './components/auth/Signup';
import Chat from './components/pages/student/Chat';
import Calender from './components/pages/student/Calender';
import TCalender from './components/pages/teacher/TCalender';
import EditTeacherProfile from './components/pages/teacher/EditTeacherProfile';
import Timeline from './components/pages/teacher/Timeline';
import PrivetRoute from './components/auth/PrivetRoute';
import PublicRoute from './components/auth/PublicRoute';
import NotFound from './components/NotFound';
import Profile from './components/pages/Profile';
import SingleProblem from './components/pages/teacher/SingleProblem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>}/>
        <Route path="/" element={<PrivetRoute><Home /></PrivetRoute>}>
          <Route index element={<DashBoard/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="/chat" element={<Chat />}/>
          <Route path="/calender" element={<Calender />}/>
          <Route path="/teacher_calender" element={<TCalender />}/>
          <Route path="/edit_teacher_profile" element={<EditTeacherProfile />}/>
          <Route path="/timeline" element={<Timeline />}/>
          <Route path="timeline/1" element={<SingleProblem/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
