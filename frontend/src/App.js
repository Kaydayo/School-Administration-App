import './App.css';
import DatabaseContent from './components/DashboardComp/DatabaseContent'
import AssignmentContent from './components/DashboardComp/AssignmentContent'
import AdminResultContent from './components/DashboardComp/AdminResultContent';
import StudentResultContent from './components/DashboardComp/StudentResultContent';
import ProfileContent from './components/DashboardComp/ProfileContent';

function App() {
  return (
    <div>
      <DatabaseContent />
      <AdminResultContent />
      <StudentResultContent />
      <AssignmentContent />
      <ProfileContent/>
    </div>
  )
}

export default App;
