// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import {addUser} from "./features/auth/authSlice"
import './App.css';

function App() {

  const disptach = useDispatch()

  const [formData, setFormData] = useState({username:'',email:'', password:''})
  const {username, email, password} = formData
  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth)

  useEffect(()=>{
  },[user, isError, isSuccess, message, disptach])

  const handleChange = (e) =>{
    setFormData((prevstate)=>({
      ...prevstate, [e.target.name]:e.target.value
  }))
}

const userlogin = (e)=>{
  e.preventDefault()
  const userData = {username, email, password}
  console.log(userData)
  disptach(addUser(userData))
    alert("Loged in Successfully")
}

  return (
    <>
    <form>
      <input type="text" placeholder='enter user name' name="username" value={username} onChange={handleChange}/>
      <input type="text" placeholder='enter user name' name="email" value={email} onChange={handleChange}/>
      <input type="text" placeholder='enter user name' name="password" value={password} onChange={handleChange}/>
      <button type='submit' onClick={userlogin}>Add User</button>
    </form>
    
    </>
  );
}

export default App;
