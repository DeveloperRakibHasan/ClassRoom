import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Nav from './components/Nav';
// import SiteMenu from './components/SiteMenu';
import Login from './components/auth/Login';
import DashBoard from './components/pages/student/DashBoard';
import Signup from './components/auth/Signup';
import TeacherProfile from './components/pages/teacher/TeacherProfile';
import StudentProfile from './components/pages/student/StudentProfile';
import Chat from './components/pages/student/Chat';
import Calender from './components/pages/student/Calender';
import RequestClass from './components/pages/student/RequestClass';
import TeacherDashboard from './components/pages/teacher/TeacherDashboard';
import EditTeacherProfile from './components/pages/teacher/EditTeacherProfile';
import Timeline from './components/pages/teacher/Timeline';
import PrivetRoute from './components/auth/PrivetRoute';
import PublicRoute from './components/auth/PublicRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav />
      <SiteMenu/> */}
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>}/>
        <Route path="/teacher_profile" element={<PrivetRoute><TeacherProfile /></PrivetRoute>}/>
        <Route path="/profile" element={<PrivetRoute><StudentProfile /></PrivetRoute>}/>
        <Route path="/" element={<PrivetRoute><DashBoard /></PrivetRoute>}/>
        <Route path="/teacher_dashboard" element={<PrivetRoute><TeacherDashboard /></PrivetRoute>}/>
        <Route path="/chat" element={<PrivetRoute><Chat /></PrivetRoute>}/>
        <Route path="/req_class" element={<RequestClass />}/>
        <Route path="/calender" element={<PrivetRoute><Calender /></PrivetRoute>}/>
        <Route path="/edit_teacher_profile" element={<PrivetRoute><EditTeacherProfile /></PrivetRoute>}/>
        <Route path="/timeline" element={<PrivetRoute><Timeline /></PrivetRoute>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>      
    
  );
}

export default App;
