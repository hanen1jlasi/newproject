import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Modification = (props) => {

    const {id} = useParams()
    const [fullname, setfullname]=useState(" ")
    const [lastname, setlastname]=useState("")
    const [age  , setage]=useState("")
    let navigate = useNavigate()

    const update =()=>{
                  
        axios.put(`http://localhost:8000/client/${id}`, 
        {
            "fullname": fullname,
            "lastname":lastname,
            "age":age 
          
        })
        .then((res ) => console.log(res.data));
        navigate("/")
    
    }
    useEffect(
        ()=>{
          axios.get("http://localhost:8000/client/"+id)
            .then(
              (res)=> {
                setfullname(res.data.fullname)
                setlastname(res.data.lastname)
                setage(res.data.age)
              }
            )
        } ,[]
      )
  
            return (
            <div className="modif" >
                

                <div>
               
              <button >updat</button>
            


<div > 
  <img src="image"/>
<form>

<input type="color" placeholder='color' />
<input type="number" />
<input type="text" Value={fullname} onChange={(e)=> setfullname(e.target.value)}/>
<input type="text" Value={lastname} onChange={(e)=> setlastname(e.target.value)}/>
<input type="text" Value={age} onChange={(e)=> setage(e.target.value)}/>
<button type="submit" onClick={()=> update()}>save</button>
</form> 
</div> 
</div>

                </div>
              
       
            )
            }
 

export default Modification