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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/techer_profile" element={<TeacherProfile />}/>
        <Route path="/profile" element={<StudentProfile />}/>
        <Route path="/dashboard" element={<DashBoard />}/>

      </Routes>
    </BrowserRouter>      
    
  );
}

export default App;
