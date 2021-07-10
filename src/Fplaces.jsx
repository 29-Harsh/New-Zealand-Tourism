import React from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Button from './theme-app';
import Footer from './Footer';
import Maincontact from './Maincontact';
import Pnavbar from './Pnavbar';
import Sheader from './Sheader';

const Fplaces = () => {
   const Demo = props => (
      <ScriptTag type="text/javascript" src="style.js" />
   )
   return (
      <div className="App">
         <Helmet>
            <title>New Zealand | Food Places</title>
         </Helmet>
         <Pnavbar />
         <Sheader h1="Food Places To Visit" place="Food Places" />
         <section className="page-section" id="portfolio">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <h2 className="section-heading text-uppercase">Food places to visit</h2>
                     <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
               </div>
            </div>
            <Card imgsrc="https://curlytales.com/wp-content/uploads/2019/10/Nik-Bakers-Just-Dial.jpg" title="Tree" sname="Nik Baker's" sname2="Kai New Zealand" sname3="Ortolana" imgsrc2="https://www.bangkokbrunchblog.com/wp-content/uploads/2016/11/kai_sathorn-25.jpg" imgsrc3="https://cdn.concreteplayground.com/content/uploads/2015/03/rsz_ortolana-e1470266119722-1920x1080.jpg" />
            <Card imgsrc="https://cdn.concreteplayground.com/content/uploads/2019/09/BambuchiSan-1920x1440.jpg" imgsrc2="https://b.zmtcdn.com/data/pictures/9/7001919/55d20b86eb3d249faed9bd6abd65cf10.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" title="Tree" sname="BambuchiSan" sname2="One Tree Grill" sname3="Floriditas
" imgsrc3="https://images.myguide-cdn.com/md/wellington/companies/floriditas-cafe-and-restaurant/large/floriditas-cafe-and-restaurant-704100.jpg" />
         </section>
         <Maincontact />
         <Footer />
      </div>

   );
}

export default Fplaces;
