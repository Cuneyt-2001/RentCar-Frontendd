
import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import UpdateCar from "./UpdateCar";
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';




function CarList(props) {
  const [data, setdata] = useState([]);
  const role =getCookie('role');
  

  function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

 
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

const token = getCookie('token');



  useEffect(() => {
  
   
    const GetData = async () => {
     
      if (role != 'true') {
    
        window.location.href = '/';    
      }
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


  const DeleteBook = (id) => {

    axios.delete(`https://localhost:7096/api/Car/${id}`,{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    }).then((result) =>

   
    {
      alert("Car is deleted");
    

       const GetingData = async () => {

         const result = await axios.get('https://localhost:7096/api/Car',{
          headers: {
             'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
          }
          });

         setdata(result.data);
      }
       GetingData();
    
    } 
      
    )   .catch(error => {
      console.error(error);
     alert("Please Try Again!");
    });
   
  }

  const navigate = useNavigate();

 const EditCar = (id) => {

   navigate(`/UpdateCar/${id}`);
  };


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Our Cars

            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>


                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Transmission</th>
                    <th>Body</th>



                  </tr>




                </thead>
                <tbody>
                  {
                    data.map((item, idx) => {
                      return <tr key={idx}>
                        <td>{item.brand}</td>
                        <td>{item.model}</td>
                        <td>{item.year}</td>
                        <td>{item.transmission}</td>
                        <td>{item.body}</td>
                        <td><div className="d-grid gap-2 d-md-block">
                          <button type="button" className="btn btn-md btn-outline-danger" onClick={() => DeleteBook(item.carID)}>Delete</button>
                        
                            <button type="button" className="btn btn-md btn-outline-warning " onClick={()=>EditCar(item.carID)}>Update</button>
                        
                        </div>
                        </td>




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

export default CarList;





