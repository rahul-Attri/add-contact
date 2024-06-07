import React, { useState } from 'react'

const Form = ({addcontact}) => {
  const[contactdata,setcontactdata]=useState({name:"",email:""})
  const handlechange=(e)=>{
    if(e.target.name==="name"){
      setcontactdata({...contactdata,name:e.target.value})
    }
    else{
      setcontactdata({...contactdata,email:e.target.value})
    }
  }
  const handleAdd=(e)=>{
    e.preventDefault()
    if(contactdata.name===""||contactdata.email===""){
      alert("please fill all the details carefully!!")
      return
    }
    addcontact(contactdata)
    setcontactdata({name:"",email:""})
  }
 
  return (
    <div className='h-60 w-full  p-4'>
        <h1>Add Contact</h1>
        <form className=' flex flex-col w-full' >
          <label for="name" >name:</label>
          <input type='text' id="name" name="name" value={contactdata.name} onChange={handlechange}  autoFocus placeholder='enter name' className='w-[20%] cursor-text border-xl border-black'/>
          <label for="email">Email:</label>
          <input type="email" id="Email" value={contactdata.email} onChange={handlechange} autoFocus name="Email"placeholder='enter Email' className='w-[20%] cursor-text  border-xl border-black'></input>
          <button onClick={handleAdd}  className='w-[15%] border-1 bg-red-400 mt-4 ml-10 rounded-2xl border-black border-2'>Add contact</button>
        </form>
    </div>
  )
}
export default Form