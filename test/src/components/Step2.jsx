import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Step2 =()=>{
    const navigate = useNavigate();
    const cityName =localStorage.getItem("cityName");

    const [formData, setFormData]=useState({
        name:"",
        salary:"",
        city:"",
        monile:"",
        profilepic:null,


    });

    const handleChange=(e)=>{
        const {name, value, files}=e.target;
        setFormData({
            ...formData,
            [name]:files ? files[0]: value,
        });


    };

    const handleSubmit =()=>{


    }






}

function Step2() {
     



  return (
    <div>



        <h2>Step2: Enter User Detail</h2>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <br/>
        <label>Salary</label>
        <input type="text" name="salary" value={formData.salary} onChange={handleChange}></input>
        <br/>
        <label>City</label>

        <input type="text" name="city"value={formData.city} onChange={handleChange} ></input>
        <br/>
        <label>Mobile</label>
         <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}></input>
         <br/>
         <label>Profile Picture</label>
         <input type="text" name="profile " value={formData.profile} onChange={handleChange}></input>
         
        


    </div>
  )
}

export default Step2