import './App.css';
import StudentRegister from './Components/Registrar/StudentRegister';
import TeacherRegister from './Components/Admin/TeacherRegister';
import EmployeeRegister from './Components/Admin/EmployeeRegister';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      {/* <StudentRegister/> */}
      {/* <TeacherRegister/> */}
      {/* <EmployeeRegister/> */}
      <Login/>
    </div>
  );
}

export default App;
