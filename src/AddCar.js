import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';



const AddCarr = () => {
  const [brand, setOption1] = useState('');
  const [transmission, setOption2] = useState('');
  const [body, setOption3] = useState('');
  const [model, setInputValue1] = useState('');
  const [year, setInputValue2] = useState('');
  const token = getCookie('token');
  const role =getCookie('role');
  const [alertMessage, setAlertMessage] = useState('');


  
 
  
 



 

   function getCookie(name) {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
    
    
     if (parts.length === 2) {
       return parts.pop().split(';').shift();
     }
   }
  

   useEffect(() => {
  
     if (role != 'true') {
    
       window.location.href = '/';    
     }
    
   }, []);



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var myData = {                    
      "Brand": brand,                   
      "Transmission": transmission,
      "Body": body,                   
      "Model": model,
      "Year": year
    };
   

    
      const response = await axios.post('https://localhost:7096/api/Car',
      myData,
      
      
      
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        
      }
      
      
      )   .then(response => {
      
        alert("Adding car is succeed");
      })
      .catch(error => {
        console.error(error);
       
       alert("Adding car is failed");
      });
     
    
   
  }

  const handleSelect1Change = (event) => {
    setOption1(event.target.value);
  }

  const handleSelect2Change = (event) => {
    setOption2(event.target.value);
  }
  const handleSelect3Change = (event) => {
    setOption3(event.target.value);
  }

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  }

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <br></br>
      <select data-testid="selectbrand" required className="form-select" value={brand} aria-label="Default select example" onChange={handleSelect1Change}>
        <option value="">Select Brand</option>
        <option value="Audi">Audi</option>
        <option value="Bmw">Bmw</option>
        <option value="Mercedes">Mercedes</option>
      </select>
      <br></br>
      <select data-testid="selecttransmission" required className="form-select"  aria-label="Default select example"value={transmission} onChange={handleSelect2Change}>
        <option value="">Select Transmission</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      <br></br>
      <select data-testid="selecttype" required className="form-select" aria-label="Default select example" value={body} onChange={handleSelect3Change}>
        <option value="">Select Type</option>
        <option value="Sedan">Sedan</option>
         <option value="Hatchback" >Hatchback</option>
           <option  value="Cabriolet">Cabriolet</option>
           <option  value="4x4">4x4</option>
      </select>
      <br></br>
      <input type="text" data-testid="testmodel" value={model} onChange={handleInputChange1} className="form-control" placeholder="Model" required />
      <br></br>
      <input type="text" data-testid="testyear" value={year} onChange={handleInputChange2} className="form-control" placeholder="Year" required />
      <br></br>
      <button data-testid="btntest" className="btn btn-lg btn-warning btn-block" type="submit">Save</button>
      <br></br>
      <br></br>
      <img src="https://img.sixt.com/1600/13954fe7-98c8-42b1-b415-d211f628ccab.png"width="500" height="200" className="rounded mx-auto d-block" alt="..."/>
    </form>
  );
};

export default AddCarr;




































// import React from "react";
// import axios from 'axios';

// class AddCar extends React.Component {
//   state = {
//          brand: '',
//          model: '',
//          year:'',
//          transmission:'',
//          body:''
//        };
    
//        handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//        };
    
//       handleSubmit = async (event) => {
//        event.preventDefault();
//        try {
//               const { brand, model,year,transmission,body } = this.state;
//                // Data to be sent in the request body
//               const data = {
//                 brand,
//                 model,
//                 year,
//                 transmission,
//                 body

//               };
        
//               // Make POST request to the specified URL
//               const response = await axios.post('https://localhost:7096/api/Car', data);
        
//               // Handle response data
//               console.log('Response:', response.data);
        
//              // Reset form fields
//              this.setState({ brand: '', model: '' ,year: '',transmission: '',body:''});
//            } catch (error) {
//               // Handle error
//                console.error('Error:', error);
//             }
//            };
    
//   render() {
//     const { brand, model,year,transmission, body} = this.state;
//     return (

//       <div>
//         <form  onClick={this.handleSubmit}>

//         <br></br>
//         <select className="form-select" defaultValue={brand} onChange={this.handleChange} aria-label="Default select example">
//           <option selected>Select Brand</option>
//           <option >Audi</option>
//           <option>BMW</option>
//           <option >Mercedes</option>
//           <option >Kia</option>
//           <option >Jaguar</option>

//         </select>
//         <br></br>
//         <select className="form-select" defaultValue={model} onChange={this.handleChange} aria-label="Default select example">
//           <option selected>Select Brand</option>
//           <option >Audi</option>
//           <option >BMW</option>
//           <option >Mercedes</option>
//           <option >Kia</option>
//           <option >Jaguar</option>
//           </select>
//         {/* <label htmlFor="Model" className="sr-only">Model</label>
//         <input type="text" value={model} id="Model" onChange={this.handleChange}  className="form-control" placeholder="Model" required autoFocus/> */}
//         <br></br>
//         {/* <label htmlFor="Year" className="sr-only">Year</label>
//         <input type="text" id="Model" value={year} onChange={this.handleChange} className="form-control" placeholder="Year" required /> */}
//  <select className="form-select" defaultValue={year} onChange={this.handleChange} aria-label="Default select example">
//           <option selected>Select Brand</option>
//           <option >2012</option>
//           <option>2015</option>
//           <option>2017</option>
//           <option>2018</option>
//           <option >2019</option>
//           </select>
//         <br></br>

//         <select className="form-select" defaultValue={transmission}  onChange={this.handleChange} aria-label="Default select example">
//           <option selected>Select Transmission</option>
//           <option >Automatic</option>
//           <option >Manual</option>
//         </select>

//         <br></br>

//         <select className="form-select" defaultValue={body} onChange={this.handleChange} aria-label="Default select example">
//           <option selected>Select Type</option>
//           <option>Sedan</option>
//           <option >Hatchback</option>
//           <option>Cabriolet</option>
//           <option>4x4</option>
//         </select>
//         <br></br>


//         <button className="btn btn-lg btn-warning btn-block" type="submit">Add Car</button>
//         <br></br>
//         <br></br>
//         <img src="https://img.sixt.com/1600/13954fe7-98c8-42b1-b415-d211f628ccab.png"width="500" height="200" className="rounded mx-auto d-block" alt="..."/>
//         </form >
//       </div>

//     )
//   }
// }


// export default AddCar;





