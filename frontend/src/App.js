import React from 'react';
import Header from './components/Header';

//componentes
import Roles from './components/Roles';
import Votantes from './components/Votantes';
//instalar bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
import  "../node_modules/jquery/dist/jquery";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    
     <Header/>   
     <Route  path="/roles" exact component={Roles}/> 
     <Route  path="/votantes" exact component={Votantes}/> 
    </Router>
   
  );
}

export default App;
