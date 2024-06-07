import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const List = (props) => {
  const{contact,removecontact}=props
  const contactlist=contact.map((val)=>{
    return(
      <div className='h-10 w-full bg-red-300 p-3 mt-2 flex justify-between'>
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <div onClick={()=>removecontact(val.data.id)}><AiFillDelete className='cursor-pointer'/></div>
      </div>
    )
  })
  return (
    <>
      <div className='w-full h-auto '>
        <div >{contactlist}</div>
      </div>
    </>
    
  )
}

export default List