import React from 'react';
import './Profile.css';


const Profile=(props)=>{
    console.log(props);
    return(
        
        <div className='card'>
        <div className='one'>
         <input type="button" className='but' value="menu"></input>
        </div>
        <div>
           
        </div>
            <div>
                Name: {props.name}
            </div>
            <div>
                Age: {props.age}
            </div>
            <div>
                {props.children}
            </div>

        </div>
         
    );

}
export default Profile;