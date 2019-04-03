import React , {Component} from 'react';
import Axios from 'axios';
import './Registration.css';
import {NavLink} from 'react-router-dom';

class Registration extends Component{
    state={
        register:{
                  FirstName:"",
                  LastName:"",
                  Mobile:"",
                  Email:"",
                  Password:"",
                  Rpassword:"",
        },
        registers:[]
    }
    onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/register`,this.state.register)
        .then (response  =>{
            if(response.data.data.status!="invalid email adress")
            {
            debugger;
            alert("sucess");
            }
            else if(response.data.data.status="error")
            {
                debugger;
                alert("Registeration not done!!!");
            }
        })
    //     .then (err =>{
    //         alert("Registeration not done!!!");
    //         console.log(err);
    //         debugger;
    //     })
     }
    onChangeHandler= (event) =>{
        let register={...this.state.register};
        register.FirstName=event.target.value; 
        
        this.setState(
            {
                register:register
            }
        );
      
    }
    onChangeHandler1= (event) =>{
        let register={...this.state.register};
        register.LastName=event.target.value; 
        this.setState(
            {
                register:register
            }
        );
    }
    onChangeHandler2= (event) =>{
        let register={...this.state.register};
        register.Mobile=event.target.value; 
        this.setState(
            {
                register:register
            }
        );
    }
    onChangeHandler3= (event) =>{
        let register={...this.state.register};
        register.Email=event.target.value; 
        this.setState(
            {
                register:register
            }
        );
    }
    onChangeHandler4= (event) =>{
        let register={...this.state.register};
        register.Password=event.target.value; 
        this.setState(
            {
                register:register
            }
        );
    }
    onChangeHandler5= (event) =>{
        let register={...this.state.register};
        register.Rpassword=event.target.value; 
        this.setState(
            {
                register:register
            }
        );
    }
    // componentDidMount= () =>{
    //     Axios.get(`http://localhost:8080/api/register`)
    //     .then(response => {
    //         console.log("registers", response) 
    //         this.setState({
    //             registers:response.data.data
    //         });
    //     });
    // }
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
            <div className="conntainer" >
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            First Name<br></br><input type="text" placeholder="First Name" onChange={this.onChangeHandler} value={this.state.register.FirstName} onBlur={this.showAlert} name="Firstn" required /><br></br>
            Last Name<br></br><input type="text" placeholder="Last Name" onChange={this.onChangeHandler1} value={this.state.register.LastName} name="Lastn" required /><br></br>
            Mobile <br></br><input type="mobile" placeholder="Mobile" onChange={this.onChangeHandler2} value={this.state.register.Mobile} name="mob" required /><br></br>
            Email<br></br><input type="Email" placeholder="Email" onChange={this.onChangeHandler3} value={this.state.register.Email} name="email" required /><br></br>
            Password<br></br><input type="Password" placeholder="Enter Password" onChange={this.onChangeHandler4} value={this.state.register.Password} name="psw" required />  <br></br>
            Reenter Password<br></br><input type="Password" placeholder="Repeat Password" onChange={this.onChangeHandler5} value={this.state.register.Rpassword} name="rpsw" required /><br></br>
            <center>
                <div><input type='submit' onClick={this.onSubmitHandler}  value='Register'></input></div>  
            </center>  
         </div>
         </div>
        );
        }
    }

export default Registration;