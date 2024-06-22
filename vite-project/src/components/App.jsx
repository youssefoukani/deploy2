import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profilo from './Profilo';
import UpdateUser from './updateUser';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const isLoggedIn=window.localStorage.getItem("loggedIn")
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={isLoggedIn=="true"? <Profilo/>: <Login/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/profilo" element ={<Profilo/>} />
          <Route path="/updateUser" element ={<UpdateUser/>} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
