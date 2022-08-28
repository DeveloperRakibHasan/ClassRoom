import { Calendar, Timeline } from 'antd'
import React from 'react'
import { Route } from 'react-router-dom'
import Chat from '../pages/student/Chat'
import DashBoard from '../pages/student/DashBoard'
import StudentProfile from '../pages/student/StudentProfile'
import EditTeacherProfile from '../pages/teacher/EditTeacherProfile'
import TeacherDashboard from '../pages/teacher/TeacherDashboard'
import TeacherProfile from '../pages/teacher/TeacherProfile'

function Body() {
  return (
    <>
    <Route path="/" element={<DashBoard />}/>
    <Route path="/teacher_dashboard" element={<TeacherDashboard />}/>
    <Route path="/teacher_profile" element={<TeacherProfile />}/>
    <Route path="/profile" element={<StudentProfile />}/>
    <Route path="/chat" element={<Chat />}/>
    <Route path="/calender" element={<Calendar />}/>
    <Route path="/edit_teacher_profile" element={<EditTeacherProfile />}/>
    <Route path="/timeline" element={<Timeline />}/>
    </>
  )
}

export default Body