import './App.css';
import StudentRegister from './Components/Registrar/StudentRegister';
import TeacherRegister from './Components/Admin/TeacherRegister';
import EmployeeRegister from './Components/Admin/EmployeeRegister';
import Login from './Components/Utils/Login';
import HomePage from './Components/Utils/HomePage';
import { BrowserRouter , Routes, Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import ViewTeacher from './Components/Admin/ViewTeachers';
import ViewStudent from './Components/Admin/ViewStudent';
import AdminSRegister from './Components/Admin/AdminSRegister';

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
        <Route path="/View-Students" exact element={<ViewStudent/>} />
        <Route path="/Admin-SRegister" exact element={<AdminSRegister/>} />
        {/* <Route path="/ViewTeacher" element={<ViewTeacher/>} /> */}
        {/* <Route path="/contact" component={Contact} /> */}

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
