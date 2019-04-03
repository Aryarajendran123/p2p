import React,{Component} from 'react';
import Axios from 'axios';
import './ViewCollateral.css'
import Sidemenu from '.././containers/Sidemenu';

class EditCollateral extends Component{
        state={
            collateral:{
                CoinAddress:""
            },
            collaterals:[]
        }
        componentDidMount= () =>{
            Axios.get(`http://localhost:8080/api/collateral`)
            .then(response => {
                console.log("collaterals", response) 
                this.setState({
                    collaterals:response.data.data
                });
            });
        }
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
        return (
            <div>
                <Sidemenu />
            <div className="content-area">
                <div className='adcol1'>
                <h1>Collateral List</h1>
                    <center>
                        <table border="1">
                            <tr>
                                <th>SL NO</th>
                                <th>Coin Address</th>
                            </tr>
                            <tbody>
                                {this.state.collaterals.map((result,i) =>(
                                <tr>
                                    <td>{i+1}</td> 
                                    <td> {result.CoinAddress}</td> 
                                    <td><input type="submit" value="delete"/></td>
                                </tr>
                            ))} 
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>            </div>

        );
    }
}
export default EditCollateral;
