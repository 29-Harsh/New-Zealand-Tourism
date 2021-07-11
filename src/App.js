import React, { useEffect } from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Button from './theme-app';
import Footer from './Footer';
import Pnavbar from './Pnavbar';
import Maincontact from './Maincontact';

function App() {
  const Demo = props => (
    <ScriptTag type="text/javascript" src="style.js" />
  )

  return (
    <div className="App">
      <Helmet>
        <title>New Zealand | Home</title>
      </Helmet>
      <Pnavbar />
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in" id="startchange">Welcome To New Zealand!</div>
            <p className="text-uppercase">Welcome aboard to New zealand!</p>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Read more</a>
          </div>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Qualities of New zealand</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" style={{ zIndex: "-2" }}></i>
                <i class="fab fa-canadian-maple-leaf" style={{ color: "white" }}></i>
              </span>
              <h4 className="service-heading">Nature</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" style={{ zIndex: "-2" }}></i>
                <i class="fas fa-kiwi-bird" style={{ color: "white" }}></i>
              </span>
              <h4 className="service-heading">Kiwi</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Security</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <span className="section-heading2 text-uppercase">Tourist attractions</span>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
        </div>
        <Card imgsrc="https://www.planetware.com/photos-large/NZ/new-zealand-bay-of-islands-urupukapuka-island-in-the-bay-of-islands.jpg" imgsrc2="https://i.pinimg.com/originals/be/45/c9/be45c938397f6110ac88530fd48c4e26.jpg" imgsrc3="https://www.newzealand.com/assets/Tourism-NZ/Christchurch-Canterbury/9aa11093e3/img-1536989144-436-6533-p-4AE01862-F0F6-45CC-A4A8B61D309D3D12-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTMsNTAsODUsImpwZyIsNjUsMi41XQ.jpg" title="Tree" sname="Bay of Islands" sname2="Queenstown" sname3="Aoraki" />
      </section>
      <Maincontact />
      <Footer />
    </div>

  );
}

export default App;
