import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Classes from './Components/Classes/Classes';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contact/Contact';
import ClassItemDetails from './Components/ClassItemDetails/ClassItemDetails';
import Footer from './Components/Footer/Footer';
import MemberShip from './Components/Membership/MemberShip';
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/about">
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/class/:classId">
            <ClassItemDetails></ClassItemDetails>
          </Route>
          <Route path="/membership">
            <MemberShip></MemberShip>
            <Footer></Footer>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
