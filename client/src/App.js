import React, { useState ,useEffect,Component} from "react";
import "./App.css";
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import ProductD from './Component/ProductD';
import Register from './Component/Register';
import Profile from './Component/Profile';
import CreatePost from './Component/CreatePost';
import CreateCategory from './Component/CreateCategory';
import CreateEmp from './Component/CreateEmp';
import Cate_product from './Component/Cate_product';
import ViewUser from './Component/ViewUser';
import ViewOrder from './Component/ViewOrder';
import OrderDetail from './Component/OrderDetail';
import Result from './Component/result';
import OrderDetail_emp from './Component/OrderDetail_emp';
import DeleteProduct from './Component/DeleteProduct';
import Order from './Component/Order';
import WebComponent from './WebComponent';
import ReactDOM from 'react-dom'
import { FaSun,FaMoon } from 'react-icons/fa';


function App() {
    const [darkmode, setdark]=useState(true);

    return ( 
        <Router>
                <div style={ {width: '100%', height: '100%'}} >
            
                    <div className={(darkmode ? ' Black': 'White')+" "+"z2 "}> <Header /></div>
                    
            
                    <div className="logo"><a onClick={() => setdark(!darkmode)}>
                    {darkmode ? <button className="buttonStyle2 moon" >
                <FaMoon />
                </button> 
            :<button className="buttonStyle2 Sun">
                <FaSun />
                </button>} 
                      </a></div>

                  
                    <Switch>
                    <Route path="/Profile">
                      <div ><Profile /></div>
                      </Route>
                      
                      <Route path="/CreatePost">
                      <div ><CreatePost /></div>
                      </Route>

                      <Route path="/ViewUser">
                      <div ><ViewUser /></div>
                      </Route>
                      <Route path="/result/:search">
                      <div ><Result /></div>
                      </Route>

                      <Route path="/CreateEmp">
                      <div ><CreateEmp /></div>
                      </Route>
                      
                      <Route path="/CreateCategory">
                      <div ><CreateCategory /></div>
                      </Route>

                      <Route path="/DeleteProduct">
                      <div ><DeleteProduct /></div>
                      </Route>

                      <Route path="/ViewOrder">
                      <div ><ViewOrder /></div>
                      </Route>

                      <Route path="/OrderDetail/:id">
                      <div ><OrderDetail/></div>
                      </Route>
                      <Route path="/OrderDetail_emp/:id">
                      <div ><OrderDetail_emp/></div>
                      </Route>

                      <Route path="/Order">
                      <div ><Order/></div>
                      </Route>

                      <Route path="/Register">
                      <div ><Register/></div>
                      </Route>

                      <Route path="/ProductD/:id">
                      <div ><ProductD/></div>
                      </Route>

                      <Route path="/Cate_product/:Cid">
                      <div ><Cate_product/></div>
                      </Route>
                      
                      <Route path="/AboutUs">
                      <div ><AboutUs/></div>
                      </Route>
                      
                      <Route path="/">
                      <div className="z3" ><Home/></div>
                      </Route>
                  </Switch>

                    
                   
            
                    <footer className={(darkmode ? ' Black': 'White')+" "+"footer"}><Footer /></footer>

                   
            
                </div>
        </Router>
        
    );
}
export default App;