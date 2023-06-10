import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import UpdateCar from "./UpdateCar";
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

 function getCookie(name) {
  const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
 
   if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
 }




function LoansList(props) {
  const [data, setdata] = useState([]);
  const role =getCookie('role');


  useEffect(() => {
    const cookies = new Cookies();
   
     
    const GetData = async () => {
      var token = cookies.get('token');
      
      if (role != 'true') {
        // Redirect the user to the login page
        window.location.href = '/';    
      }
      console.log("token: " + token);
      const result = await axios.get('https://localhost:7096/api/Loan/GetAllLoans', {
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
 
    





 




  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> My Loans

            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                  <th>UserName</th>
                  <th>Car</th>
                    <th>LoanDate</th>
                    <th>ReturnDate</th>

                  </tr>




                </thead>
                <tbody>
                  {
                    data.map((item, idx) => {
                      return <tr key={idx}>
                         <td>{item.user}</td>
                        <td>{item.car}</td>
                        <td>{item.loanDate}</td>
                        <td>{item.returnDate}</td>
                       




                      </tr>

                    })
                  }




                </tbody>



              </Table>





            </CardBody>






          </Card>







        </Col>








      </Row>







    </div>


  );

}

export default LoansList;