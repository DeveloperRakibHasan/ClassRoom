import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import TeacherProfile from './components/pages/TeacherProfile';
import DashBoard from './components/pages/DashBoard';
import StudentProfile from './components/pages/StudentProfile';
import Nav from './components/Nav';
import SiteMenu from './components/SiteMenu';
import Chat from './components/pages/Chat';
import Calender from './components/pages/Calender';
import RequestClass from './components/pages/RequestClass';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <SiteMenu/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/techer_profile" element={<TeacherProfile />}/>
        <Route path="/profile" element={<StudentProfile />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/req_class" element={<RequestClass />}/>
        <Route path="/calender" element={<Calender />}/>

      </Routes>
    </BrowserRouter>      
    
  );
}

export default App;
