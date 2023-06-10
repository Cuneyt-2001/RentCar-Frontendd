import React, { useEffect, useState  } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

function Loan() {
  const [data, setdata] = useState([]);
  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
   
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  useEffect(() => {
    const token = getCookie('token');
    // || !isValidToken(token)
      if (!token ) {
        // Redirect the user to the login page
        window.location.href = '/';
      }

    const GetData = async () => {

      const result = await axios.get('https://localhost:7096/api/Car', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setdata(result.data);
    }
    GetData();
  }
    , [])
    const navigate = useNavigate();

    const LoanCar = (id) => {
     navigate(`/CreateLoan/${id}`);
    };

 
 
      return(
        
      
          data.map((item,idx)=>
          {
            return < div key={idx}>
  <div className="row" >
     <div className="col-lg-4">
   <div className="card mb-4 shadow-sm">
     <img src="https://www.flytap.com/-/media/Flytap/victoria/lead-partners/desktop/XXMAREAL-1562_1920x625.jpg?h=625&w=1920&la=en-US&hash=BA47783E8EA2C80B4E7EF1AA79E75890B43302F3" className="card-img-top" alt="..."/>
     <div className="card-body">
      <h5 className="card-title">{item.brand}</h5>
      <br></br>
      <p className="card-text"><strong>Model:</strong>{item.model}</p>
      <p className="card-text"><strong>Year:</strong>{item.year}</p>
      <p className="card-text"><strong>Transmission:</strong>{item.transmission}</p>
      <p className="card-text"><strong>Body:</strong>{item.body}</p>
      <div className="d-flex justify-content-between align-items-center">
      <div className="d-grid gap-2 d-md-block">
           <Link  to={`/CreateLoan/${item.carID}`}>
        <button type="button"data-testid= "my-button" className="btn btn-md btn-outline btn-warning"  >Loan</button>
        </Link>
        <Link  to={`/WriteReview/${item.carID}`}>
        <button type="button" className="btn btn-md btn-outline btn-info"  >Share Review</button>
        </Link>
        <Link  to={`/ReviewList/${item.carID}`}>
        <button type="button" className="btn btn-md btn-outline btn-primary"  > Details</button>
        </Link>
        
   
    </div>
         <h2 ><span className="badge abdge-info"></span></h2>
     </div>
   </div>
   </div>
   </div>
   </div>
   </div>
  

})
);
}

 
  
  

export default Loan