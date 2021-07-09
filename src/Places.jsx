import React from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Footer from './Footer';
import Maincontact from './Maincontact';
import Pnavbar from './Pnavbar';
import Sheader from './Sheader';

const Places = () => {
   const Demo = props => (
      <ScriptTag type="text/javascript" src="style.js" />
   )
   return (
      <div className="App">
         <Helmet>
            <title>New Zealand | Places to visit</title>
         </Helmet>
         <Pnavbar />
         <Sheader h1="Places To Visit" place="Places" />
         <section className="page-section" id="portfolio">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 text-center">
                     <h2 className="section-heading text-uppercase">Places to visit</h2>
                     <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
               </div>
            </div>
            <Card imgsrc="https://www.planetware.com/photos-large/NZ/new-zealand-bay-of-islands-urupukapuka-island-in-the-bay-of-islands.jpg" imgsrc2="https://i.pinimg.com/originals/be/45/c9/be45c938397f6110ac88530fd48c4e26.jpg" imgsrc3="https://www.newzealand.com/assets/Tourism-NZ/Christchurch-Canterbury/9aa11093e3/img-1536989144-436-6533-p-4AE01862-F0F6-45CC-A4A8B61D309D3D12-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTMsNTAsODUsImpwZyIsNjUsMi41XQ.jpg" title="Tree" sname="Bay of Islands" sname2="Queenstown" sname3="Aoraki" />
            <Card imgsrc="https://www.newzealand.com/assets/Tourism-NZ/Auckland/cfeb375aac/img-1545344662-6574-9912-C9EDA874-9F47-C996-B68CBE301D86DB16__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNTAsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg" imgsrc2="https://cdn.odysseytraveller.com/app/uploads/2020/10/GettyImages-875331434-scaled.jpg" title="Tree" sname="Auckland" sname2="Piopiotahi" sname3="Lake Tekapo
" imgsrc3="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/10/67.jpg" />
            <Card imgsrc="https://resources.thomascook.in/images/holidays/sightSeeing/Huka-Falls.jpg" title="Tree" sname="Huka Falls" sname2="Coronet Peak" sname3="Mount Taranaki" imgsrc2="https://www.nzski.com/media/3994/coronet-peak-pano-large.jpg" imgsrc3="https://lp-cms-production.imgix.net/news/2018/06/500pxRF_173514057.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850" />

         </section>
         <Maincontact />
         <Footer />
      </div>

   );
}

export default Places;
