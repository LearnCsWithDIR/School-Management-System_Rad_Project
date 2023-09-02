import './App.css';
import StudentRegister from './Components/Registrar/StudentRegister';
import TeacherRegister from './Components/Admin/TeacherRegister';
import EmployeeRegister from './Components/Admin/EmployeeRegister';
import Login from './Components/Utils/Login';
import HomePage from './Components/Utils/HomePage';
import { BrowserRouter , Routes, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import ViewTeacher from './Components/Admin/ViewTeachers';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/ViewTeacher" element={<ViewTeacher/>} />
        <Route path="/StudentRegister" element={<EmployeeRegister/>} />
        {/* <Route path="/ViewTeacher" element={<ViewTeacher/>} /> */}
        {/* <Route path="/contact" component={Contact} /> */}

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
