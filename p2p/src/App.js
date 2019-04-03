import React, { Component } from 'react';
import './App.css';
import {Route,Link,BrowserRouter} from 'react-router-dom';
import Profile from './components/Profile';
import Registration from './components/Registration';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Click from './components/Click';
import Sidemenu from './containers/Sidemenu';
import Content from './containers/Content';
import Footer from './containers/Footer';
import Addcollateral from './containers/Addcollateral';
import EditCollateral from './containers/EditCollateral';
import ViewCollateral from './containers/ViewCollateral';
import ViewRequest from './containers/ViewRequest';
import LendList from './containers/LendList';
import SendRequest from './containers/SendRequest';
import BorrowList from './containers/BorrowList';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
        <Route  path="/home" component={Homepage} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/signup" component={Login} />
          <Route exact  path="/login" component={Sidemenu} />
          <Route  path="/login" component={Click} /> 

            <Route exact path='/login/ViewRequest' exact component={ViewRequest} />
            <Route exact path='/login/LendList' component={LendList} />
            <Route exact path='/login/SendRequest' exact component={SendRequest} />
            <Route exact path='/login/BorrowList' exact component={BorrowList} />
            <Route exact path='/login/AddCollateral' exact component={Addcollateral} />
            <Route exact path='/login/EditCollateral' exact component={EditCollateral} />
            <Route exact path='/login/ViewCollateral' exact component={ViewCollateral} />
         
          <Footer />  
        </div> 
      </BrowserRouter>         
    );
  }
}
export default App;
