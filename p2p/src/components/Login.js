import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import Axios from 'axios';
import './Login.css';

class Login extends Component{
  state={
    login:{
      Email:"",
      Password:"",
   },
  logins:[]
}
// onSubmitHandler= () => {
//   debugger;
//   Axios.get(`http://localhost:8080/api/register`)
//   .then(res => {
//     if (res.status === 400) {
//       this.props.history.push('http://localhost:8080/api/login');
//     } else {
//       const error = new Error(res.error);
//       throw error;
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     alert('Error logging in please try again');
//     debugger;
//     console.log(this.Email);
//   });
// }

onChangeHandler= (event) =>{
  let login={...this.state.login};
  login.Email=event.target.value; 
  this.setState(
      {
        login:login
      }
  );

}
onChangeHandler2= (event) =>{
let login={...this.state.login};
login.Password=event.target.value; 
this.setState(
    {
      login:login
    }
);
}  
render=() =>{
  return(
    <div>
    <div className="containerr">
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/signup">Signin</NavLink></li>
        <li><NavLink to="/register">Signup</NavLink></li>
      </ul>
    </div>
    <div className='main'>
      {/* <body> */}
      <center>
        <div className="login">
          <h1>Login</h1>
          <input type="email" placeholder="email"  id="email" onChange={this.onChangeHandler} value={this.state.login.Email} className="Logo"/>  
          <input type="password" placeholder="password" onChange={this.onChangeHandler2} value={this.state.login.Password} id="password" className="Logo" />  
          <a href="#" className="forgot">Forgot Password?</a>
          <Link to="/login"> <input type="submit" onClick={this.onSubmitHandler}  value="Signin" className="Logo1" /></Link>
        </div>
        <div className="shadow"></div>
      {/* </body> */}</center>
    </div>
    </div>
  );
  }
}
export default Login;