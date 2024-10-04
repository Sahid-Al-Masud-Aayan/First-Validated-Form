import { useState } from 'react';
import './App.css'
import { RiEyeCloseLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import Lottie from "lottie-react";
import signup from '../public/device.json'
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  
  const [deafault, change]= useState(false)
     const show = ()=>{
        change(!deafault)
    }
    const [email, editEmail]=useState('')
    const [password, editpassword]=useState('')
    const [emailError, setEmailError]=useState('')
    const [passwordError, setpasswordError]=useState('')

const emailEvent=(e)=>{
    editEmail(e.target.value)
    setEmailError('')
  }

  const passEvent=(e)=>{
    editpassword(e.target.value)
    setpasswordError('')
  }
   const captain =(e)=>{
    e.preventDefault()
    if(!email){
      setEmailError('Please enter your email!')
  }if(!password){
    setpasswordError('Please enter your password!')
  }else{
      toast.success('Login Successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });
  }

 }
  
  
  return (
    <>
    <ToastContainer />
    <div className=" w-[1114px] h-[616px] bg-white rounded-[40px]">
      <div className="flex flex-row justify-between">
        <form onSubmit={captain}>
          <div className=" flex flex-col p-12">
        <div className=" flex flex-col justify-center items-center "> 
        <h3 className=' font-semibold text-[40px] text-[#333333] '>Welcome Back</h3>
        <p className=' font-normal text-2xl text-[#5fa5ff] mb-8'>We’re so excited to see you again!</p>
      </div>
      <p className=' font-normal text-[16px] text-[#5fa5ff] mb-[7px]'>Email</p>
      <input onChange={emailEvent} className=' h-[56px] w-[484px] border-[#5fa5ff] border-[1px] outline-none rounded-xl pl-5' type="email" />
      <p className=' text-xs font-medium text-red-600'>{emailError}</p>
      <p className=' font-normal text-[16px] text-[#5fa5ff] mb-[7px] mt-[24px] '>Password</p>
      <div className=" relative w-[484px]">
        {
        deafault?
          <RiEyeCloseLine onClick={show} className=' absolute top-[25%] left-[90%] text-[#0004ff] text-2xl' />
          :
          < BsEye onClick={show}  className=' absolute top-[25%] left-[90%] text-[#0004ff] text-2xl' />
        }
        <input onChange={passEvent} className=' h-[56px] w-[484px] border-[#5fa5ff] border-[1px] outline-none rounded-xl pl-5' type={deafault? 'text':"password"} />
        <p className=' text-xs font-medium text-red-600'>{passwordError}</p>
      </div>
      <a href="#"><p className=' font-medium text-[14px] text-[#0466e7] mb-[32px] ml-[325px] mt-[10px]'>Forgot your password?</p></a>
        <div className="flex flex-col justify-center items-center ">
        <button type='submit' className=' w-[484px] h-[64px] bg-gradient-to-r from-[#0004ff] to-[#00ebff] rounded-[32px] text-[22px] font-medium text-white mb-8 active:scale-[1.1] '>Log in</button>
      <p className=' font-normal text-[16px] text-[#5fa5ff]  items-center'>Don't have an account? <span className=' font-medium text-[#0004ff]'><a href="#">Sign up</a></span></p>
      </div>
    </div> 
      </form>
    <div className=' flex flex-col justify-center items-center'>
      <Lottie className=' w-[500px] h-[500px]' animationData={signup}/> 
      <h3 className=' font-bold text-[40px] text-[#333333] '>Log in to your account</h3>
      <p className=' font-normal text-xl text-[#5fa5ff] mb-8'>To watch your activities, please log in.</p>
    </div>


      </div>
      
    </div>
    </>
  )
}

export default App