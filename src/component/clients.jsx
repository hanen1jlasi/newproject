import React from 'react'
import { useNavigate } from 'react-router-dom'

const Clients = (props) => {
  let navigate=useNavigate()

  return (  
    <div className='info'>
        <div>

       <h1>{props.fullname}</h1>
       <h2>{props.lastname}</h2>
       <h2>{props.age}</h2>
       <h2>{props.phone}</h2>
       <h2>{props.mail}</h2>
<button  onClick={()=> navigate(`./profile/${props.id}`)}> view </button>
<button  onClick={()=>navigate(`./modification/${props.id}`)}> modif </button>
     
       </div>
    </div>
  )
}

export default Clients