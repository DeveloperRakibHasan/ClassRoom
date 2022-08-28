import React from 'react'
import StudentProfile from './student/StudentProfile'
import TeacherProfile from './teacher/TeacherProfile'

function Profile() {
    const usr = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    {
        usr.type === 'student' ? <StudentProfile/> : null
    }
    {
        usr.type === 'teacher' ? <TeacherProfile/> : null
    }
    </>
  )
}

export default Profile