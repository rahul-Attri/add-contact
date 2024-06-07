import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const localstoragekey="contact"

  const[contact,setcontact]=useState( ()=>{ return JSON.parse(localStorage.getItem(localstoragekey))||[]})
  useEffect(()=>{
    localStorage.setItem(localstoragekey,JSON.stringify(contact))
  },[contact])

  const addcontact=(data)=>{
    setcontact([...contact,{id:uuidv4(),data}])
    console.log(data)
  }
  const removecontact=(id)=>{
    const updatedcontact=contact.filter((val)=>{
      return val.id==id
    })
    setcontact(updatedcontact)
  }
  return (
    <>
  <Header/>
  <Form addcontact={addcontact}/>
  <List contact={contact} removecontact={removecontact}/>
    </>
  )
}
export default App