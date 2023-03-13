import React, { useEffect, useState } from 'react'
import Clients from './clients'
import axios from 'axios'
const Client = () => {
    const [client , setclient]=useState([])
    const [fullname, setfullname]=useState("")
    const [lastname, setlastname]=useState("")
    const [age  , setage]=useState("")
    const [phone  , setphone]=useState("")
    const [mail , setmail]=useState("")

    useEffect(
()=>{
    axios.get(" http://localhost:8000/client")
    .then((res)=>setclient(res.data)).catch((err)=>console.log(err))

},[]
    )
  return (
<div className="client">
    {
      client.map(
        (el,index)=>(
        <Clients  fullname={el.fullname} lastname={el.lastname} age={el.age} phone={el.phone} mail={el.mail}  span={el.span} key={index} id={el.id} />
      )
      )
    }
  </div>
  )
}

export default Client