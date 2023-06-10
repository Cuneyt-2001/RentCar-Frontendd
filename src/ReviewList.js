import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap'
import UpdateCar from "./UpdateCar";
import { Link, useNavigate,useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';


function ReviewList(props) {
  const [data, setdata] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const cookies = new Cookies();
   
     
    const GetData = async () => {
      var token = cookies.get('token');
      if (!token ) {
        window.location.href = '/';
      }
      console.log("token: " + token);
      const result = await axios.get(`https://localhost:7096/api/CarReview/${id}`, {
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
        <div>
          {data.map((data) => (
            <div className="card" key={data.id}>
              <div className="card-header">
                {data.car}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{data.reviewContent}</p>
                  <footer className="blockquote-footer">{data.user} </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      );
          }

       

    
    

 




      export default ReviewList;