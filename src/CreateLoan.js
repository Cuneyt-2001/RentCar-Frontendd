import React, { useEffect, useState  } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import axios from 'axios';


const CreateLoan = () => { 
  const [loanDate, setOption1] = useState('');
  const [ReturnDate, setOption2] = useState('');
  const { id } = useParams();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
   
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }
  const handleSelect1Change = (event) => {
    setOption1(event.target.value);
  }

  const handleSelect2Change = (event) => {
    setOption2(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
     const token = getCookie('token');
     if (!token) {
      throw new Error('Invalid token');
    }
    console.log(loanDate);
    console.log(ReturnDate);
    console.log(id);
    var myData = {                    
     "loanDate": loanDate ,
     "ReturnDate": ReturnDate ,
     "carID": id                
              
              };
    
      // Axios POST request
      const response = await axios.post('https://localhost:7096/api/Loan', 
         myData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }) .then(response => {
      
        alert("Booking is succeed");
      })
      .catch(error => {
        console.error(error);

       alert("Booking is failed! please check the dates or choose another car");
      });
     
    
    
  
}




 
  useEffect(() => {
    // Check if the cookie exists and contains a valid JWT token
   const token = getCookie('token');
  // || !isValidToken(token)
    if (!token ) {
      // Redirect the user to the login page
      window.location.href = '/';
    }
  }, []);








 
    
      return(
<form  onSubmit={handleFormSubmit}>

<div className="form-group">
<label className="control-label"></label>
<input  value={id} className="form-control"  disabled  required/>
</div>

<div className="form-group">
<label  labelfor="LoanDate"  className="form-label" >LoanDate</label>
<input type="date"  data-testid="date1" value={loanDate} onChange={handleSelect1Change} id="LoanDate" required className="form-control"  />


</div>





<div className="form-group">
<label  labelfor="ReturnDate" className="form-label">ReturnDate</label>
<input type="date"  data-testid="date2"  value={ReturnDate} onChange={handleSelect2Change} id="ReturnDate" required className="form-control"  />
<br></br>

</div>
<div className="form-group">
<div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="submit">Loan Now</button>
   <Link to="/Loan"> 
  <button className="btn btn-secondary" type="button">Back ToList</button>
   </Link> 
</div>
</div>
</form>
  );
};


export default CreateLoan;