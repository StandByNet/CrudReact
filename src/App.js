import logo from './logo.svg';
import './App.css';
import React  from 'react';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import  Home from './conponents/Home';
import  AddUser from './conponents/AddUser';
import  EditUser from './conponents/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">    
      <Router> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Nav </h1>
       </header>
        <Routes>
          <Route exact path='/add' element ={<AddUser/>}/>
          <Route path='/edit/:id' element ={<EditUser/>}/>
          <Route path='/' element ={<Home/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}
export default App;
