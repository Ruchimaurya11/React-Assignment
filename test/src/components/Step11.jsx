import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

    


function Step11() {

        const[cityName,setCityName]=useState("");
        const navigate =useNavigate();
    
        const handleNext =() =>{
            if(cityName.trim()===""){
              alert("enter city name");
                return;
            }
            localStorage.setItem("CityName",cityName);
    
    
        };
 return (
    <div>
         <h2>Step1: Enter User Detail</h2>
        <label> City Name</label>
        <input type="text" name="name" value={cityName} onChange={(e)=> setCityName(e.target.value)}></input>
       <br/>
       <button onClick={()=> setNext(true)}>Submit Button</button>

    </div>
  )
}

export default Step11;