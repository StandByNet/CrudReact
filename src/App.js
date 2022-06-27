import logo from './logo.svg';
import './App.css';
import React  from 'react';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import  Home from './conponents/Home';
import  AddUser from './conponents/AddUser';
import  EditUser from './conponents/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css'
import {GlobalProvider} from  './context/GlobalState';


function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"1rem auto"}} className="App">   
    <GlobalProvider>
      <Router> 
        <h1> Nav </h1>
        <Routes>
          <Route exact path='/add' element ={<AddUser/>}/>
          <Route path='/edit/:id' element ={<EditUser/>}/>
          <Route path='/' element ={<Home/>}/>
        </Routes>
      </Router>      
      </GlobalProvider> 
     
    </div>
  );
}
export default App;
