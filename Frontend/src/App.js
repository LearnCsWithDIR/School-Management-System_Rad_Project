import './App.css';
import { BrowserRouter , Routes, Route, Switch } from 'react-router-dom';
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
function App() {
  return (
    <>
    <BrowserRouter>
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
        {/* <Route path="/ViewTeacher" element={<ViewTeacher/>} /> */}
        {/* <Route path="/contact" component={Contact} /> */}

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
