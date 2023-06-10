 import React, { useState, useEffect } from "react";
 import {  useParams } from "react-router-dom";
 import axios from "axios";
 import { Cookies } from 'react-cookie';



 const UpdateCar = () => {
   const { id } = useParams(); 
   const [car, setCar] = useState({}); 
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("");
   const [body, setBody] = useState("");

   const token = getCookie('token');
   const role=getCookie('role');
   

   function getCookie(name) {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
  
     if (parts.length === 2) {
       return parts.pop().split(';').shift();
     }
          }

  
   const handleUpdate = () => {
   
   

     var myData = {                    
       "Brand": brand,                   
       "Transmission": transmission,
       "Body": body,                   
       "Model": model,
       "Year": year
    };

    axios.put(`/api/Car/${id}`,myData
    ,
     {

      headers: {
         'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
       }

     }).then(response => {
      
      alert("Car is updated");
    })
     .catch(error => {
     alert("Updateing car is failed");
    });
  };

  useEffect(() => {
   
    const token = getCookie('token');
    if (role != 'true') {
      // Redirect the user to the login page
      window.location.href = '/';    
    }
    
     axios.get(`/api/Car/${id}`, {

      headers: {
        'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
      },
     }).then(response => {
      setCar(response.data);
      setBrand(response.data.brand);
      setYear(response.data.year);
     setTransmission(response.data.transmission);
     setModel(response.data.model);
     setBody(response.data.body);

       
      })
       .catch(error => {
          console.error("Error fetching car details:", error);
       });
   }, [id])
  



 

  return (
     <div>
      <h1>Car Details</h1>
      
    
       <select required className="form-select" value={brand} onChange={e => setBrand(e.target.value)}>
      <option value="">Select Brand</option>
          <option value="Audi">Audi</option>
            <option value="BMW">Bmw</option>
          <option value="Mercedes">Mercedes</option>

       </select>
       <br></br>
       <select required className="form-select" value={body} onChange={e => setBody(e.target.value)}>
       <option value="">Select Type</option>
           <option value="Sedan">Sedan</option>
           <option value="Hatchback" >Hatchback</option>
             <option  value="Cabriolet">Cabriolet</option>
             <option  value="4x4">4x4</option>
 
       </select>
       <br></br>
      <select required className="form-select"
         value={transmission}
         onChange={e => setTransmission(e.target.value)}
     >
         <option value="">Select Transmission</option>
         <option value="Automatic">Automatic</option>
           <option value="Manual">Manual</option>
  
       </select>
       <br></br>
      <input className="form-control" required
         type="text"
         value={model}
        onChange={e => setModel(e.target.value)}
         placeholder="Model"
       />
         <br></br>
      <input className="form-control" required
        type="text"
         value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Year"
      />

  <br></br>
       

     
       <button className="btn btn-lg btn-warning btn-block" onClick={handleUpdate}>Update</button>
      <br></br>
        <br></br>
          <img src="https://img.sixt.com/1600/13954fe7-98c8-42b1-b415-d211f628ccab.png"width="500" height="200" className="rounded mx-auto d-block" alt="..."/>
    </div>
   );

 };

export default UpdateCar;
