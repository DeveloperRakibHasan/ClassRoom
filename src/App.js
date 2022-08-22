import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import SiteMenu from './components/SiteMenu';
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


function App() {
  return (
    <BrowserRouter>
   <Nav/>
    <SiteMenu/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/teacher_profile" element={<TeacherProfile />}/>
        <Route path="/profile" element={<StudentProfile />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/teacher_dashboard" element={<TeacherDashboard />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/req_class" element={<RequestClass />}/>
        <Route path="/calender" element={<Calender />}/>
        <Route path="/edit_teacher_profile" element={<EditTeacherProfile />}/>

      </Routes>
    </BrowserRouter>      
    
  );
}

export default App;
