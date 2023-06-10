import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import UpdateCar from "./UpdateCar";
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';




function GetLoans(props) {
  const [data, setdata] = useState([]);


  useEffect(() => {
    const cookies = new Cookies();
   
     
    const GetData = async () => {
      var token = cookies.get('token');
      if (!token ) {
        window.location.href = '/';
      }
      console.log("token: " + token);
      const result = await axios.get('https://localhost:7096/api/Loan/GetLoan', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
       
      
      if (!token ) {
      
         window.location.href = '/';
      }
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

                  <th>Car</th>
                    <th>LoanDate</th>
                    <th>ReturnDate</th>

                  </tr>




                </thead>
                <tbody>
                  {
                    data.map((item, idx) => {
                      return <tr key={idx}>
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

export default GetLoans;
