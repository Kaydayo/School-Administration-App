import Headerlog from './components/LoginComp/Headerlogin'
import Login from './components/LoginComp/Login'
import Headerreg from './components/RegisterComp/HeaderReg'
import Register from './components/RegisterComp/Register'
import './App.css';
import DatabaseContent from './components/DashboardComp/DatabaseContent'
import AssignmentContent from './components/DashboardComp/AssignmentContent'
import AdminResultContent from './components/DashboardComp/AdminResultContent';
import StudentResultContent from './components/DashboardComp/StudentResultContent';
import ProfileContent from './components/DashboardComp/ProfileContent';
import React from 'react'
// import Header from './components/HeaderComp/Admin/Header'
// import ParentHeader from './components/HeaderComp/Parent/ParentHeader'
// import StudentHeader from './components/HeaderComp/Student/StudentHeader'
// import TeacherHeader from './components/HeaderComp/Teachers/TeacherHeader'
import RegisterTeacher from './components/RegisterComp/RegisterTeacher'

function App() {
  return (
    <div className = "container">
      <Headerlog />
      <Login />
      <Headerreg />
      <Register />
      <div>
      <DatabaseContent />
      <AdminResultContent />
      <StudentResultContent />
      <AssignmentContent />
      <ProfileContent/>
      <RegisterTeacher />
    </div>
    </div>
    
   
  )
}

export default App;
