import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch ,useLocation} from 'react-router-dom';
import StudentRegister from './Components/Registrar/StudentRegister';
import TeacherRegister from './Components/Admin/TeacherRegister';
import EmployeeRegister from './Components/Admin/EmployeeRegister';
import Login from './Components/Utils/Login';
import HomePage from './Components/Utils/HomePage';
import Admin from './Components/Admin/Admin';
import ViewTeacher from './Components/Admin/ViewTeachers';
import ViewStudent from './Components/Admin/ViewStudent'; 
import AdminSRegister from './Components/Admin/AdminSRegister';
import AdminERegister from './Components/Admin/AdminERegister';
import ViewEmployee from './Components/Admin/ViewEmployee';
import AdminTRegister from './Components/Admin/AdminTRegister';

import AddResult from './Components/Teacher/AddResult';
import TeacherDashboard from './Components/Teacher/TeacherDashboard';
import TViewStudentData from './Components/Teacher/TViewStudentData';
import TeacherSRegister from './Components/Teacher/TeacherSRegister';
import Teacher from './Components/Teacher/Teacher';


import Student from './Components/Student/Student';
import AddAttendence from './Components/Registrar/AddAttendence';

import ParentDashboard from './Components/Parent/ParentDashboard';
import Parent from './Components/Parent/Parent';


import StuPasswordReset from './Components/Student/StuPasswordReset';
import TeacherPasswordReset from './Components/Teacher/TeacherPasswordReset';
import ParentPasswordReset from './Components/Parent/ParentPasswordReset';
import AdminPasswordReset from './Components/Admin/AdminPasswordReset';

function App() {

  // const location = useLocation();
  // const location = useLocation();
  // const currentRoute = location.pathname;
  // const TeacherRoutes = [
  //   "/Add-Result",
  //   "/Teacher-View-Student-Data",
  // ];

  // const TeacherRoutesWithComponent = TeacherRoutes.includes(currentRoute);
  // const shouldShowAdNavbar = allowAdnavbar.includes(currentRoute);

  return (
    <>
    {/* {TeacherRoutesWithComponent && <TeacherDashboard />} */}
    {/* {shouldShowAdNavbar && <AdNavbar />} */}
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/Admin" exact element={<Admin/>} />
        <Route path="/ViewTeacher" exact element={<ViewTeacher/>} />
        <Route path="/StudentRegister" exact element={<StudentRegister/>} />
        <Route path="/Teacher-Register" exact element={<TeacherRegister/>} />
        <Route path="/View-Students" exact element={<ViewStudent/>} />
        <Route path="/View-Employee" exact element={<ViewEmployee/>} />
        <Route path="/View-Teacher" exact element={<ViewTeacher/>} />
        <Route path="/Admin-SRegister" exact element={<AdminSRegister/>} />
        <Route path="/Admin-ERegister" exact element={<AdminERegister/>} />
        <Route path="/Admin-TRegister" exact element={<AdminTRegister/>} />
        <Route path="/Employee-Register" exact element={<EmployeeRegister/>} />


        {/* teacher's roters */}
        <Route path="/Teacher/:id" exact element={<Teacher/>} />
        <Route path="/Add-Result/:id" exact element={<AddResult/>} />
        <Route path="/Teacher-S-Register" exact element={<TeacherSRegister/>} />
        <Route path="/Teacher-View-Student-Data" exact element={<TViewStudentData/>} />


        {/* <Route path="/student" exact element={<Student/>} /> */}
        <Route path="/Student-Attendence" exact element={<AddAttendence/>} />
        <Route path="/Student/:id" exact element={<Student/>} />

        <Route path="/Parent/:id" exact element={<Parent/>} />

        <Route path="/password-reset" exact element={<StuPasswordReset/>} />
        <Route path="/password-reset" exact element={<TeacherPasswordReset/>} />
        <Route path="/password-reset" exact element={<ParentPasswordReset/>} />
        <Route path="/password-reset" exact element={<AdminPasswordReset/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
