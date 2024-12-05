import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    
    //  <div className="App">  
 
        <Router>        
              <HeaderComponent />
                  <div className="container">
                      <Routes>
                          <Route path="/" component = {ListEmployeeComponents}></Route>
                          <Route path="/employees" component = {ListEmployeeComponents}></Route>                      
                         
                      </Routes>
                      <ListEmployeeComponents /> 
                  </div>
              <FooterComponent />           
        </Router>      
   
  //  </div>
  );
}

export default App;

//ReactJS + Spring Boot CRUD Full Stack App - 12 - Creating Add Employee REST API
