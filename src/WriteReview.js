import React, { useState, useEffect, useId } from 'react';
import axios from 'axios';
import { useNavigate, useParams,Link } from "react-router-dom";
import { Cookies } from 'react-cookie';

const cookies = new Cookies();


const WriteReview = () => {


  const email = getCookie('email');
  const [userid, setId] = useState("");
  const { id } = useParams();
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
 


  

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
   
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }
 
 




  

    const [brand, setBrand] = useState("");
    const [Reviewcontent, setComment] = useState("");
    const [responseBody, setResponseBody] = useState(null);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
         const token = getCookie('token');
         if (!token) {
          throw new Error('Invalid token');
        }
        const selectedOptionIds = $("select").val()
       

        axios.post('https://localhost:7096/api/Review', { selectedOptionIds,Reviewcontent,id }, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
           
          })
          .catch(error => {
            console.error(error);
          });












        var myData = {                    
                   "reviewcontent": Reviewcontent,                   
                  "carID": id,
                   "FeelingIds": selectedOptionIds
                 };
                
        console.log(myData);
     
         
          const response = await axios.post('https://localhost:7096/api/Review', 
             myData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }) .then(response => {
      
            alert("Your Review is saved!");
          })
          .catch(error => {
            console.error(error);
         
          alert("Please Try Again!");
         });
         
         
        
     
    }

    useEffect(() => {
     
      console.log(email);
     
       const token = getCookie('token');
    if (!token ) {     
      window.location.href = '/';
    }
        axios.get(`/api/Car/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            setBrand(response.data.brand);
          })
          .catch(error => {
            console.error("Error fetching car details:", error);
          });

          axios.get('https://localhost:7096/api/Feeling', {
            headers: {
              'Authorization': `Bearer ${token}`,
               'Content-Type': 'application/json'
            }
          })
            .then(response => {
              // Update state with fetched data
              console.log(response.data)
              setOptions(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
          
       }, [id]);

      const handleInputChange2 = (event) => {
        setComment(event.target.value);
      }

return(



<div >
    <br></br>
    <label htmlFor="car">Car</label> 
<input type="text" className="form-control"  value={brand}  disabled  aria-label="Sizing example input"  onChange={e => setBrand(e.target.value) } id="Car"  aria-describedby="inputGroup-sizing-default"/>
<br></br>
 <br></br>
<label htmlFor="floatingTextarea2">Comments</label> 
<textarea className="form-control" value={Reviewcontent} required   onChange={handleInputChange2} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:100 }} ></textarea>
<br></br>
<br></br>
<select className="form-select" multiple aria-label="multiple select example">
      {options.map(option => (
        <option key={option.feelingID} value={option.feelingID}>{option.feel}</option>
      ))}
    </select>
<br></br>
<div className="d-grid gap-2">
<button className="btn btn-warning" onClick={handleFormSubmit} type="button">Save</button>
<br></br>

<img src="https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my23/granturismo/assets/05_169_2.jpg?$1920x2000$&fit=constrain"width="500" height="250" className="rounded mx-auto d-block" alt="..."/>
</div>

</div>

);
}
export default WriteReview;