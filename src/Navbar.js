 import React, { useEffect, useState  } from "react";
import { useCookies } from 'react-cookie';
 import { Cookies } from 'react-cookie';



 function Navbar ()
   {
    
      const [cookies, setCookie, removeCookie] = useCookies(['username']);
      const [username, setusername] = useState(cookies.name );
     const [userRole,setUserrole] = useState("");
  
    
    

    
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
       
       
        if (parts.length === 2) {
           return parts.pop().split(';').shift();
         }
       }
    
      useEffect(() => {
       
       const role= getCookie('role');
       setUserrole(role);
       
      setusername(cookies.username);
      });

   
       
      

       
    

  
       
      

   const handleRemoveCookie = () => {

     setCookie("username", false);
    setusername(false);
   removeCookie('username');
     removeCookie('token');
     removeCookie('role')
     removeCookie('email')
  
  
   };
   const handleLogin = () => {
  
     setCookie("username", true);
    setusername(true);
  };


  


 
      return(
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
     {/* {userRole === "true" && (
          <>
          <a className="nav-item nav-link active"  href="http://localhost:3000/Home">Home <span className="sr-only">(current)</span></a>
    <a className="nav-item nav-link" href="http://localhost:3000/About">About</a>
             <a className=" nav-item nav-link "   href="http://localhost:3000/Addcar">AddCar</a>
             <a className=" nav-item nav-link " href="http://localhost:3000/LoansList">AllLoans</a>
             <a className="nav-item nav-link " href="http://localhost:3000/CarList">Cars</a>
          </>
       )} */}
       
           
      <a className="nav-item nav-link active"  href="http://localhost:3000/Home">Home <span className="sr-only">(current)</span></a>
    
     <a className=" nav-item nav-link" href="http://localhost:3000/GetLoans">MyLoans</a>
     <a className="nav-item nav-link" href="http://localhost:3000/Loan">Loan</a> 
     {/* <a className="nav-item nav-link active"  href="http://localhost:3000/Home">Home <span className="sr-only">(current)</span></a>
    */}
     <a className="nav-item nav-link" href="http://localhost:3000/About">About</a> 
  
      .........................................................................................................................................................................
      ..........................................................................................................................................

  
     
     
    
    {username?(
  <a className="navbar-text" onClick={handleRemoveCookie} href="http://localhost:3000">
    Logout - 
     Welcome {username}
  </a>
     ):(
      <a className="navbar-text" onClick={handleLogin} href="http://localhost:3000">
     Welcome
     </a>
      )}
  
    
    
  
 
      
    
   
      
    </div>
   </div>
  
 </nav>
        );
      
    }
  

export default Navbar



