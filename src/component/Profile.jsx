import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

    const {id} = useParams() 
    const [client, setclient] = useState({})
    useEffect(
      ()=>{
        axios.get("http://localhost:8000/client/"+id)
          .then(
            (res)=> setclient(res.data)
          )
      } ,[]
    )

    console.log(id)
  return (
    <div>
      <p>{client.fullname}</p>
      <p>{client.lastname}</p>
      <p>{client.age}</p>
      <p>{client.phone}</p>
      <p>{client.email}</p>

    </div>
  )
}

export default Profile