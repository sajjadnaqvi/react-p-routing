import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import Service from './Service';
import Users from './Users';

class App extends React.Component{
  render(){
    return(
      <>
      <Menu/>
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={()=><Contact name="  Contact"/>}/> 
        <Route path="/service" render={()=><Service name=" Servicess"/>}/>
        <Route path="/user/:fname" component={Users}/>
        <Route component={Error}/>
      </Switch>
      </>
      
    );
  }
   
  
}


export default App;
