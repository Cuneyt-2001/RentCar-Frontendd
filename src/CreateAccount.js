




import React, { Component } from 'react';
import axios from 'axios';

class CreateAccount extends Component {
  state = {
    name: '',
    surname: '',
    email:'',
    password:''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { name, surname,email,password } = this.state;
      
      const data = {
        name,
        surname,
        email,
        password
      };

      // Make POST request to the specified URL
      const response = await axios.post('https://localhost:7096/api/User', data)
      .then(response => {
      
        alert("Creating Account is Succeed");
      }) .catch(error => {
        console.error(error);
     
       alert("Creating Account is failed");
      });

      // Handle response data
      console.log('Response:', response.data);

      // Reset form fields
      this.setState({ name: '', surname: '' ,email: '',password: ''});
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  render() {
    const { name, surname,email,password } = this.state;

    return (
      <div>
    
        <form className="form-signin col-md-2 mx-auto" onSubmit={this.handleSubmit}>
        <img src="https://www.ekan.com.tr/wp-content/uploads/2020/12/arac-kiralama-icerik.jpg" className="img-fluid" alt="..."/>
        <br></br>
        <br></br>
          <label>
            Name:
            <input data-testid="name" type="text" name="name" className="form-control" placeholder="Name" required value={name} onChange={this.handleChange} />
          </label>
          <label>
            Surname:
            <input data-testid="surname" type="text" name="surname"  className="form-control" placeholder="Surname" required value={surname} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input data-testid="email" type="email" name="email"  className="form-control" placeholder="Email" required value={email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input data-testid="password" type="password" name="password"  className="form-control" placeholder="Password" required value={password} onChange={this.handleChange} />
          </label>
          <br></br>
          <br></br>
          <button  className="btn btn-lg btn-danger btn-block" type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;















































// import React, { useState } from "react";
// import axios from "axios";



// const CreateAccount = () =>  {
    
//   const [Name, setName] = useState("");
//   const [Surname, setSurname] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://localhost:7096/api/User/CreateAccount", {
//         Name,
//         Surname,
//         Email,
//         Password
//       });
//       console.log("Record added successfully!", response.data);
//     } 
//     catch (error) {
//       console.error("Error adding record:", error);
//     }
//   };

//       return(
           
//       <div className="text-center">
//       <form className="form-signin col-md-2 mx-auto" onSubmit={handleFormSubmit}/>
//       <img src="https://www.ekan.com.tr/wp-content/uploads/2020/12/arac-kiralama-icerik.jpg" className="img-fluid" alt="..."/>
//       <h2 className="h3 mb-3 font-weight-normal"></h2>
//       <br></br>
//       <label htmlFor="name" className="sr-only">Name</label>
//       <input type="name" value={Name} id="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" required/>
     
     
//       <br></br>
//       <label htmlFor="surname" className="sr-only">surname</label>
//       <input type="surname" value={Surname} id="surname" onChange={(e) => setSurname(e.target.value)}  className="form-control" placeholder="surname" required/>
    
//       <br></br>
//       <label htmlFor="inputEmail" className="sr-only">Email address</label>
//       <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
//       <br></br>
//       <label htmlFor="inputPassword" className="sr-only">Password</label>
//       <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)}  id="inputPassword" className="form-control" placeholder="Password" required/>
//       <br></br>
//       <button  className="btn btn-lg btn-danger btn-block" type="submit">Sign up</button>
//       <form/>
//       </div>
   
//       );
      
   
      
      
//     };
  

// export default CreateAccount