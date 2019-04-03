import React , {Component} from 'react';
import './Addcollateral.css'
import Axios from 'axios';
import Sidemenu from '.././containers/Sidemenu';

class Addcollateral extends Component{
    state={
        collateral:{
            CoinAddress:""
        },
        collaterals:[]
    }
    onSubmitHandlerr= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/collateral`,this.state.collateral)
        .then (response  =>{
            debugger;
            if(response.data.data.status!="error")
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
    }
    //     .then (err =>{
    //         alert("Registeration not done!!!");
    //         console.log(err);
    //         debugger;
    //     })
     
    onChangeHandler11= (event) =>{
        let collateral={...this.state.collateral};
        collateral.CoinAddress=event.target.value; 
        
        this.setState(
            {
                collateral:collateral
            }
        );
      
    }
    render=() =>{ 
        return(
        <div>
        <Sidemenu />
        <div className="content-area">
        <div className='adcol'>
        <h1>Register Collateral</h1>
            Enter Address of the coin: <input type='number' placeholder='plz fill' onChange={this.onChangeHandler11} value={this.state.collateral.CoinAddress}  required/>
            <center><input type='submit' onClick={this.onSubmitHandlerr}  value='ADD' /></center>
        </div>
        </div>
        </div>
    );
    }
}
export default Addcollateral;